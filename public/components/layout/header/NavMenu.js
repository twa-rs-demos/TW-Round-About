import {Component} from 'react';
import MenuList from './MenuList';
import SearchBox from './SearchBox';

export default class NavMenu extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-xs-10'>
          <MenuList/>
        </div>
        <div className='col-xs-2'>
          <SearchBox/>
        </div>
      </div>
    );
  }
}
