import {Component} from 'react';
import MenuList from './MenuList';
import Search from './SearchBox';

export default class NavMenu extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-xs-10">
          <MenuList/>
        </div>
        <div className=" col-xs-2">
          <Search/>
        </div>
      </div>
    );
  }
}
