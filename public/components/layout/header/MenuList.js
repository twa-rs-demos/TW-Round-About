import {Component} from 'react';
import {Link} from 'react-router';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItemList: this.props.menuItemList,
      selectedSubMenu: this.props.subMenu
    };
  }

  render() {
    const menuItemList = this.state.menuItemList.map((menuItem, index) => {
      const selected = (this.state.selectedSubMenu.indexOf(menuItem.slug) !== -1) ? 'selected-sub' : '';
      const uriType = menuItem.description.uriType;
      let subMenu = uriType === 'withinPage'
        ? <a href={URI_PREFIX + '/' + this.props.slug + '#' + menuItem.slug} className={selected}>
        {menuItem.name}
      </a>
        : <Link to={URI_PREFIX + '/' + this.props.slug + '/' + menuItem.slug} className={selected}>
        {menuItem.name}
      </Link>;

      subMenu = uriType === 'donate'
        ? <Link to={URI_PREFIX + '/donate'}>{menuItem.name}</Link> : subMenu;

      subMenu = uriType === 'outsideLink'
        ? <a href={menuItem.description.link}>{menuItem.name}</a> : subMenu;
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

export default class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [],
      currentParentMenu: '',
      selectedPrentMenu: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedPrentMenu: nextProps.path.parentUri,
      menuList: nextProps.menuList
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
        {this.state.currentParentMenu === menu.slug ?
          <Menu slug={menu.slug} subMenu={this.props.path.subUri}
                menuItemList={menu.meta}/>
          : ''}
      </div>;
    });
    return (
      <div className='menu'>
        {menuList}
      </div>
    );
  }
}
