import {Component} from 'react';
import MenuList from './MenuList';
import SearchBox from './SearchBox';

export default class NavMenu extends Component {
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
        <a href="#" className="menu-icon">==</a>
        <div className="menu-list2">
          {/*<div className="overlay"></div>*/}

          <div className="sidebar-wrapper"></div>
          <div className="nav-bar">
            <ul className="sidebar-nav">
              <li>f</li>
              <li>f</li>
              <li>f</li>
              <li>f</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
