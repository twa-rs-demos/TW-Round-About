import {Component} from 'react';
import {Link} from 'react-router';

class SubMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: this.props.menu,
      selected: this.props.subUri
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      menu: nextProps.menu,
      selected: nextProps.subUri
    });
  }

  selectSubMenu(parentUri, subUri) {
    this.setState({selected: subUri});
    this.props.selectMenu(parentUri);
  }

  render() {
    const menu = this.state.menu;
    const subMenu = menu.meta.map((item, index) => {
      const uriType = item.description.uriType;
      const connectCharacter = (uriType === 'withinPage') ? '#' : '/';
      const path = `${URI_PREFIX}/${menu.slug}${connectCharacter}${item.slug}`;
      const selected = (this.state.selected.indexOf(item.slug) !== -1) ? 'selected-sub-menu' : '';
      let subMenuType = uriType === 'withinPage'
        ? <a href={path} className={'menu-link ' + selected}
             onClick={this.selectSubMenu.bind(this, menu.slug, item.slug)}>
        {item.name}
      </a>
        : <Link to={path} className={'menu-link ' + selected}
                onClick={this.selectSubMenu.bind(this, menu.slug, item.slug)}>
        {item.name}
      </Link>;

      subMenuType = (uriType === 'donate')
        ? <Link to={path} className={'menu-link ' + selected}
                onClick={this.selectSubMenu.bind(this, menu.slug, item.slug)}>
        {item.name}
      </Link>
        : subMenuType;

      subMenuType = (uriType === 'outsideLink')
        ? <a href={item.description.link} className={'menu-link ' + selected}>{item.name}</a> : subMenuType;

      return <li key={index} className='sub-item '>
        {subMenuType}
      </li>;
    });

    return <ul className='sub-menu'>
      {subMenu}
    </ul>;
  }
}

export default class SecondMenu extends Component {

  componentWillReceiveProps(nextProps) {
    this.setState({
      menuList: nextProps.menuList,
      parentUri: nextProps.path.parentUri,
      selected: nextProps.path.parentUri
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      menuList: this.props.menuList,
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
    const menuList = this.state.menuList.map((menu, index) => {
      const isShowSubMenu = this.state.parentUri === menu.slug;
      const selected = (menu.slug === this.state.selected) ? 'active' : '';

      return <div key={index}>
        <li className='menu-item'>
          <div className={'nav-brand ' + selected}>
            < Link to={URI_PREFIX + '/' + menu.slug} className='menu-link'
                   onClick={this.hideSubMenu.bind(this, menu.slug)}>
              {menu.name}
            </Link>
            <i className={'dropdown-icon fa fa-chevron-' + (isShowSubMenu ? 'up' : 'down')}
               onClick={this.showSubMenu.bind(this, menu.slug)}></i>
          </div>
          {isShowSubMenu ?
            <SubMenu menu={menu} subUri={this.props.path.subUri} selectMenu={this.selectMenu.bind(this)}/> : ''}
        </li>
      </div>;
    });

    return (
      <div>
        <ul className='nav-item'>
          {menuList}
        </ul>
      </div>
    );
  }
}
