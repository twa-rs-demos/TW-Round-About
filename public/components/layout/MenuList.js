import React, {Component} from 'react';
import superagent from 'superagent';
import noCache from  'superagent-no-cache';
import '../../style/layout.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItemList: []
    }
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
          })
        }
      });
  }

  render() {
    const menuItemList = this.state.menuItemList.map((menuItem, index) => {
      return <li key={index} className="dropdown-item"><a href="#">{menuItem.name}</a></li>
    });
    return (
      <div className="dropdown">
        <div className="triangle-tip-up"></div>
        <div className="dropdown-list">
          <ul className="dropdown-items">
            {menuItemList}
          </ul>
        </div>
      </div>
    )
  }
}

export default class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [],
      currentMenuId: ''
    };
  }

  componentDidMount() {
    superagent
      .get('/wp-json/wp/v2/categories?slug=menulist')
      .use(noCache)
      .end((err, res) => {
        if (err) {
          throw (err);
        } else {
          const categoryParent = res.body[0];
          superagent
            .get(`/wp-json/wp/v2/categories?parent=${categoryParent.id}`)
            .use(noCache)
            .end((err, res) => {
              if (err) {
                throw (err)
              } else {
                this.setState({
                  menuList: res.body
                });
              }
            })
        }
      })
  }

  showMenu(id) {
    this.setState({currentMenuId: id});
  }

  hideMenu() {
    this.setState({currentMenuId: ''});
  }

  render() {
    const menuList = this.state.menuList.map((menu, index) => {
      return <div className="menu-list" key={index}
                  onMouseEnter={this.showMenu.bind(this, menu.id)}
                  onMouseLeave={this.hideMenu.bind(this)}>
        <div className="first-menu"><a href="#">{menu.name}</a></div>
        {this.state.currentMenuId === menu.id ? <Menu id={menu.id}/> : ''}
      </div>;
    });
    return (
      <div className="col-md-9 padding menu">
        {menuList}
      </div>
    );
  }
}
