import {Component} from 'react';
import superagent from 'superagent';
import noCache from 'superagent-no-cache';
import async from 'async';
import MenuList from './MenuList';
import SearchBox from './SearchBox';
import SecondMenu from './SecondMenu';

export default class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [],
      showMenuList2: false
    };
  }

  componentDidMount() {
    async.waterfall([
      (done) => {
        superagent
          .get('/wp-json/wp/v2/categories?slug=menulist')
          .use(noCache)
          .end((err, res) => {
            if (err) {
              done(err, null);
            } else {
              done(null, res.body[0]);
            }
          });
      },
      (categoryParent, done) => {
        superagent
          .get(`/wp-json/wp/v2/categories?parent=${categoryParent.id}`)
          .use(noCache)
          .end((err, res) => {
            if (err) {
              done(err, null);
            } else {
              done(null, res.body);
            }
          });
      }
    ], (err, menuList) => {
      if (err) {
        throw err;
      }
      // this.setState({menuList: sortMenu(menuList)});
      menuList.map(item => {
        this.getSubMenuList(item.id, (result) => {
          item.subMenu = result
        })
      });

      this.setState({menuList}, () => {
        console.log(this.state.menuList)
      });
    });
  }

  getSubMenuList(id, callback) {
    superagent
      .get(`/wp-json/wp/v2/categories?parent=${id}`)
      .use(noCache)
      .end((err, res) => {
        if (err) {
          throw (err);
        } else {
          callback(res.body)
        }
      });
  }


  changeMenuList() {
    this.setState({showMenuList2: !this.state.showMenuList2}, () => {
      if (this.state.showMenuList2) {
        $('.menu-list2').css('display', 'block');
        $('body').css('overflow', 'hidden');
      } else {
        $('.menu-list2').css('display', 'none');
        $('body').css('overflow', 'auto');
      }
    });
  }

  render() {
    return (
      <div>
        <div className='row no-margin menu-list1'>
          <div className='col-md-10 col-xs-7'>
            <MenuList path={this.props.layout}/>
          </div>
          <div className='col-md-2 col-xs-5 text-right no-padding header-search-box'>
            <SearchBox/>
          </div>
        </div>

        <div className='row no-margin responsive-menu'>
          <div className='col-md-2 col-xs-3'>
            <button className='menu-icon' onClick={this.changeMenuList.bind(this)}>
              <i className='fa fa-bars'></i>
            </button>
          </div>
          <div className='col-md-10 col-xs-9 text-right no-padding header-search-box'>
            <SearchBox/>
          </div>
        </div>

        <div className='menu-list2'>
          <div className='sidebar-wrapper' onClick={this.changeMenuList.bind(this)}></div>
          <div className='nav-bar'>
            <SecondMenu hideMenu={this.changeMenuList.bind(this)} path={this.props.layout}/>
          </div>
        </div>
      </div>
    );
  }
}
