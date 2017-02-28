import {Component} from 'react';
import menuData from '../../../raw-data/menu-lilst';

class SubMenu extends Component {

  render() {
    const subMenu = this.props.subMenu.map((item, index) => {

      return <li key={index}>
        {item.name}
      </li>
    });

    return <ul>
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
          <span>{menu.firstMenu}</span>
          <i className={'fa fa-chevron-' + (isShowSubMenu ? 'up' : 'down')}
             onClick={this.showSubMenu.bind(this, index)}></i>
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
