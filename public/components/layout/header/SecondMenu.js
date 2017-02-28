import {Component} from 'react';
import {Link} from 'react-router';
import menuData from '../../../raw-data/menu-lilst';

class SubMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '/'
    };
  }

  selectSubMenu(parentUri, subUri) {
    this.props.selectMenu(parentUri);
    this.setState({selected: subUri});
  }

  render() {

    const menu = this.props.menu;
    const subMenu = menu.subMenu.map((item, index) => {

      const path = URI_PREFIX + menu.uri + item.subUri;
      const selected = (this.state.selected === item.subUri) ? 'selected-sub-menu' : '';

      return <li key={index} className='sub-item '>

        {item.uriType === 'withinPage' ?
          <a href={path} className={'menu-link ' + selected}
             onClick={this.selectSubMenu.bind(this, menu.uri, item.subUri)}>
            {item.name}
          </a>
          :
          <Link to={path} className={'menu-link ' + selected}
                onClick={this.selectSubMenu.bind(this, menu.uri, item.subUri)}>
            {item.name}
          </Link>
        }
        {item.subUri === '' ? <Link to={URI_PREFIX + '/donate'}>{item.name}</Link> : '' }
      </li>
    });

    return <ul className='sub-menu'>
      {subMenu}
    </ul>
  }
}

export default class SecondMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subMenu: '/',
      selected: ''
    };
  }

  showSubMenu(index) {
    if (index === this.state.subMenu) {
      this.setState({subMenu: '/'});
    } else {
      this.setState({subMenu: index});
    }
  }

  selectMenu(uri) {
    this.props.hideMenu();
    this.setState({selected: uri});
  }

  hideSubMenu(uri) {
    this.setState({subMenu: '/'});
    this.selectMenu(uri);
  }

  render() {

    const menuList = menuData.map((menu, index) => {

        const isShowSubMenu = this.state.subMenu === index;
        const selected = (menu.uri === this.state.selected) ? 'active' : '';

        return <div key={index}>
          <li className='menu-item'>
            <div className={'nav-brand ' + selected}>
              < Link to={URI_PREFIX + menu.uri} className='menu-link' onClick={this.hideSubMenu.bind(this, menu.uri)}>
                {menu.firstMenu}
              </Link>
              <i className={'dropdown-icon fa fa-chevron-' + (isShowSubMenu ? 'up' : 'down')}
                 onClick={this.showSubMenu.bind(this, index)}></i>
            </div>
            {isShowSubMenu ? <SubMenu menu={menu} selectMenu={this.selectMenu.bind(this)}/> : ''}
          </li>
        </div>
      }
    );


    return (
      <div>
        <ul className='nav-item'>
          {menuList}
        </ul>
      </div>
    );
  }
}
