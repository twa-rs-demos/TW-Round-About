import {Component} from 'react';
import superagent from 'superagent';
import noCache from 'superagent-no-cache';
import {Link} from 'react-router';
import async from 'async';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItemList: [],
      selectedSubMenu: this.props.subMenu
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
      const selected = (this.state.selectedSubMenu.indexOf(menuItem.slug) !== -1) ? 'selected-sub' : '';
      let subMenu = menuItem.description === 'inside-page'
        ? <a href={URI_PREFIX + '/' + this.props.slug + '#' + menuItem.slug} className={selected}>
        {menuItem.name}
      </a>
        : <Link to={URI_PREFIX + '/' + this.props.slug + '/' + menuItem.slug} className={selected}>
        {menuItem.name}
      </Link>;

      subMenu = menuItem.description === 'donate'
        ? <Link to={URI_PREFIX + '/donate'}>{menuItem.name}</Link> : subMenu;
      return (
        <li key={index} className='dropdown-item'>
          {subMenu}
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

const sortMenu = function (items) {
  items.map(item => {
    item.description = JSON.parse(item.description);
  });

  return items.sort((x, y) => {
    return x.description.index - y.description.index;
  })
};

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
      this.setState({menuList: sortMenu(result)});
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({selectedPrentMenu: nextProps.path.parentUri});
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
        {this.state.currentParentMenu === menu.slug ?
          <Menu id={menu.id} slug={menu.slug} subMenu={this.props.path.subUri}/> : ''}
      </div>;
    });
    return (
      <div className='menu'>
        {menuList}
      </div>
    );
  }
}
