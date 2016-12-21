import {Component} from 'react';
import {NavDropdown, MenuItem} from 'react-bootstrap';
import superagent from 'superagent';
import noCache from  'superagent-no-cache';

export default class NewNavDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItemList: []
    };
  }

  getMenuItem() {
    return this.state.menuItemList.map((menuItem, index) => {
      return <MenuItem value={menuItem.name} id={index} className="menu-item" key={index}>{menuItem.name}</MenuItem>
    });
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

  setMenuStyle() {
    const currentElement = $(`#${this.props.id}`);
    currentElement.css({'border-radius': '100px', 'background-color': '#EB4B99', 'color': '#FFFFFF'});
    const menus = currentElement.parent().siblings();
    Array.from(menus).forEach(menu => {
      menu.firstChild.removeAttribute("style");
    });
  }

  render() {
    return (
      <NavDropdown title={this.props.title} id={this.props.id} eventKey="1" onClick={this.setMenuStyle.bind(this)}>
        {this.getMenuItem()}
      </NavDropdown>
    );
  }
}
