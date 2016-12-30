import {Component} from 'react';
import MenuList from './MenuList';
import SearchBox from './SearchBox';

export default class NavMenu extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-10 col-xs-7'>
          <MenuList/>
        </div>
        <div className='col-md-2 col-xs-5 text-right'>
          <SearchBox/>
        </div>
      </div>
    );
  }
}
