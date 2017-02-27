import {Component} from 'react';
import {ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';

export default class SecondMenu extends Component {
  render() {
    const menuData = this.props.menuData;
    const subMenu = menuData.subMenu.map((item, index) => {

      return <li>
        <MenuItem eventKey={index.toString()} key={index}>
          {item.name}
        </MenuItem>
      </li>
    });

    return ( <div>
      <li className="menu-item">
        <ButtonGroup vertical block>
          <DropdownButton title={menuData.firstMenu} id="bg-vertical-dropdown-1">
            <ul className="sub-menu">
              {subMenu}
            </ul>
          </DropdownButton>
        </ButtonGroup>
      </li>
      <li className="divider"></li>
    </div>);
  }
}
