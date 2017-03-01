import {Component} from 'react';
import superagent from 'superagent';
import noCache from 'superagent-no-cache';
import {Link} from 'react-router';
import async from 'async';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItemList: []
    };
  }

  componentDidMount() {
    superagent
      .get(`/wp-json/wp/v2/categories?parent=${this.props.id}`)
      .use(noCache)
      .end((err, res) => {
        if (err) {
          throw (err);
        } else {
          this.setState({
            menuItemList: res.body
          });
        }
      });
  }

  render() {
    const menuItemList = this.state.menuItemList.map((menuItem, index) => {
      let path = menuItem.description === 'inside-page'
        ? <a href={URI_PREFIX + '/' + this.props.slug + '#' + menuItem.slug}>{menuItem.name}</a>
        : <Link to={URI_PREFIX + '/' + this.props.slug + '/' + menuItem.slug}>{menuItem.name}</Link>;

      path = menuItem.description === 'donate'
        ? <Link to={URI_PREFIX + '/donate'}>{menuItem.name}</Link> : path;
      return (
        <li key={index} className='dropdown-item'>
          {path}
        </li>
      );
    });
    return (
      <div className='dropdown'>
        <div className='triangle-tip-up'></div>
        <div className='dropdown-list'>
          <ul className='dropdown-items'>
            {menuItemList}
          </ul>
        </div>
      </div>
    );
  }
}

export default class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [],
      currentParentMenu: '',
      selectedPrentMenu: ''
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
    ], (err, result) => {
      if (err) {
        throw err;
      }
      this.setState({menuList: result});
    });
  }

  showMenu(uri) {
    this.setState({currentParentMenu: uri});
  }

  hideMenu() {
    this.setState({currentParentMenu: ''});
  }

  selectMenu(uri) {
    this.setState({selectedPrentMenu: uri, currentParentMenu: ''});
  }

  render() {
    const menuList = this.state.menuList.map((menu, index) => {
      return <div className='menu-list' key={index}
                  onMouseEnter={this.showMenu.bind(this, menu.slug)}
                  onMouseLeave={this.hideMenu.bind(this)}
                  onClick={this.selectMenu.bind(this, menu.slug)}
      >

        <div className={'first-menu ' + (this.state.selectedPrentMenu === menu.slug ? 'active' : '')}>
          <Link to={URI_PREFIX + '/' + menu.slug}>
            {menu.name}
            <span className='triangle'></span>
          </Link>
        </div>
        {this.state.currentParentMenu === menu.slug ? <Menu id={menu.id} slug={menu.slug}/> : ''}
      </div>;
    });
    return (
      <div className='menu'>
        {menuList}
      </div>
    );
  }
}
