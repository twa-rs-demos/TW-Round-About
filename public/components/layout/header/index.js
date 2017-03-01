import {Component} from 'react';
import NavMenu from '../../../containers/layout/nav-menu';
import TopInfo from './TopInfo';

export default class Header extends Component {
  render() {
    return (
      <div id='header'>
        <div className='top-info'>
          <TopInfo/>
        </div>
        <div className='nav-menu'>
          <NavMenu/>
        </div>
      </div>
    );
  }
}
