import {Component} from 'react';
import {Link} from 'react-router';
import menuData from '../../../raw-data/menu-lilst';

class SubMenu extends Component {

  render() {

    const menu = this.props.menu;
    const subMenu = menu.subMenu.map((item, index) => {

      const path = URI_PREFIX + menu.uri + item.subUri;
      return <li key={index} className='sub-item'>
        {item.uriType === 'outsidePage' ?
          <Link to={path} className='menu-link' onClick={this.props.hideMenu}>
            {item.name}
          </Link>
          :
          <a href={path} className='menu-link' onClick={this.props.hideMenu}>
            {item.name}
          </a>
        }
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
      subMenu: '',
      isShowSubMenu: false
    };
  }

  showSubMenu(index) {
    if (index === this.state.subMenu) {
      this.setState({subMenu: ''});
    } else {
      this.setState({subMenu: index});
    }
  }

  render() {

    const menuList = menuData.map((menu, index) => {

      const isShowSubMenu = this.state.subMenu === index;

      return <div key={index}>
        <li className='menu-item'>
          <div className='nav-brand'>
            <Link to={URI_PREFIX + menu.uri} className='menu-link' onClick={this.props.hideMenu}>
              {menu.firstMenu}
            </Link>
            <i className={'dropdown-icon fa fa-chevron-' + (isShowSubMenu ? 'up' : 'down')}
               onClick={this.showSubMenu.bind(this, index)}></i>
          </div>
          {isShowSubMenu ? <SubMenu menu={menu} hideMenu={this.props.hideMenu}/> : ''}
        </li>
      </div>
    });


    return ( <div>
      <ul className='nav-item'>
        {menuList}
      </ul>
    </div>);
  }
}
