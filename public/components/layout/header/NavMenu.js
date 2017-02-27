import {Component} from 'react';
import {ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';
import MenuList from './MenuList';
import SearchBox from './SearchBox';

export default class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenuList2: false
    };
  }

  changeMenuList() {
    this.setState({showMenuList2: !this.state.showMenuList2}, () => {
      if (this.state.showMenuList2) {
        $('.menu-list2').css('display', 'block');
      } else {
        $('.menu-list2').css('display', 'none');
      }
    });
  }

  render() {

    return (
      <div>
        <div className='row no-margin menu-list1'>
          <div className='col-md-10 col-xs-7'>
            <MenuList/>
          </div>
          <div className='col-md-2 col-xs-5 text-right no-padding header-search-box'>
            <SearchBox/>
          </div>
        </div>
        <button className="menu-icon" onClick={this.changeMenuList.bind(this)}>
          <i className="fa fa-bars"></i>
        </button>
        <div className='menu-list2'>
          <div className="sidebar-wrapper"></div>
          <div className="nav-bar">
            {/*// <ul>*/}
            {/*//   <li>*/}
            {/*//     <DropdownButton title="Dropdown" id="bg-nested-dropdown">*/}
            {/*//       <ul>*/}
            {/*//         <li><MenuItem eventKey="1">Dropdown link</MenuItem></li>*/}
            {/*//         <li className="divider"></li>*/}
            {/*//         <li><MenuItem eventKey="2">Dropdown link</MenuItem></li>*/}
            {/*//       </ul>*/}
            {/*//     </DropdownButton>*/}
            {/*//   </li>*/}
            {/*//   <li className="divider"></li>*/}
            {/*//   <li>*/}
            {/*//     <DropdownButton title="Dropdown2" id="bg-nested-dropdown">*/}
            {/*<ul>*/}
            {/*<li><MenuItem eventKey="1">Dropdown link</MenuItem></li>*/}
            {/*<li className="divider"></li>*/}
            {/*<li><MenuItem eventKey="2">Dropdown link</MenuItem></li>*/}
            {/*</ul>*/}
            {/*</DropdownButton>*/}
            {/*</li>*/}
            {/*</ul>*/}

            <ButtonGroup vertical block>
              <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
                <MenuItem eventKey="1">Dropdown link</MenuItem>
                <MenuItem eventKey="2">Dropdown link</MenuItem>
              </DropdownButton>
              <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
                <MenuItem eventKey="1">Dropdown link</MenuItem>
                <MenuItem eventKey="2">Dropdown link</MenuItem>
              </DropdownButton>
              <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
                <MenuItem eventKey="1">Dropdown link</MenuItem>
                <MenuItem eventKey="2">Dropdown link</MenuItem>
              </DropdownButton>
            </ButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}
