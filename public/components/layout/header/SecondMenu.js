import {Component} from 'react';
import {Link} from 'react-router';
import menuData from '../../../raw-data/menu-lilst';

class SubMenu extends Component {

  render() {
    const subMenu = this.props.subMenu.map((item, index) => {

      return <li key={index} className='sub-item'>
        <Link to={item.uri} className='menu-link'>{item.name}</Link>
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
            <a href='#' className='menu-link'>{menu.firstMenu}</a>
            <i className={'dropdown-icon fa fa-chevron-' + (isShowSubMenu ? 'up' : 'down')}
               onClick={this.showSubMenu.bind(this, index)}></i>
          </div>
          {isShowSubMenu ? <SubMenu subMenu={menu.subMenu}/> : ''}
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
