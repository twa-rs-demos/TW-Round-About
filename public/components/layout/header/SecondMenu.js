import {Component} from 'react';
import {Link} from 'react-router';
import menuData from '../../../raw-data/menu-lilst';

class SubMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.subUri
    };
  }

  selectSubMenu(parentUri, subUri) {
    this.setState({selected: subUri});
    this.props.selectMenu(parentUri);
  }

  render() {

    const menu = this.props.menu;
    const subMenu = menu.subMenu.map((item, index) => {

      const connectCharacter = (item.uriType === 'withinPage') ? '' : '/';
      const path = `${URI_PREFIX}/${menu.uri}${connectCharacter}${item.subUri}`;
      const selected = (this.state.selected === item.subUri) ? 'selected-sub-menu' : '';

      return <li key={index} className='sub-item '>

        {item.subUri === '' ?
          <Link to={URI_PREFIX + '/donate'} className={'menu-link ' + selected}
                onClick={this.selectSubMenu.bind(this, menu.uri, item.subUri)}>
            {item.name}
          </Link>
          :
          <Link to={path} className={'menu-link ' + selected}
                onClick={this.selectSubMenu.bind(this, menu.uri, item.subUri)}>
            {item.name}
          </Link>
        }
      </li>
    });

    return <ul className='sub-menu'>
      {subMenu}
    </ul>
  }
}

export default class SecondMenu extends Component {

  componentWillReceiveProps(nextProps) {
    this.setState({
      parentUri: nextProps.path.parentUri,
      selected: nextProps.path.parentUri
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      parentUri: this.props.path.parentUri,
      selected: this.props.path.parentUri
    };
  }

  showSubMenu(uri) {
    if (uri === this.state.parentUri) {
      this.setState({parentUri: '/'});
    } else {
      this.setState({parentUri: uri});
    }
  }

  selectMenu(uri) {
    this.setState({selected: uri});
    this.props.hideMenu();
  }

  hideSubMenu(uri) {
    this.selectMenu(uri);
    this.setState({parentUri: '/'});
  }

  render() {

    const menuList = menuData.map((menu, index) => {

        const isShowSubMenu = this.state.parentUri === menu.uri;
        const selected = (menu.uri === this.state.selected) ? 'active' : '';

        return <div key={index}>
          <li className='menu-item'>
            <div className={'nav-brand ' + selected}>
              < Link to={URI_PREFIX + '/' + menu.uri} className='menu-link'
                     onClick={this.hideSubMenu.bind(this, menu.uri)}>
                {menu.firstMenu}
              </Link>
              <i className={'dropdown-icon fa fa-chevron-' + (isShowSubMenu ? 'up' : 'down')}
                 onClick={this.showSubMenu.bind(this, menu.uri)}></i>
            </div>
            {isShowSubMenu ?
              <SubMenu menu={menu} subUri={this.props.path.subUri} selectMenu={this.selectMenu}/> : ''}
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
