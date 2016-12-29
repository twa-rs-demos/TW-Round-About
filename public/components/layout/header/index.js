import {Component} from 'react';
import NavMenu from './NavMenu';
import TopInfo from './TopInfo';

export default class Header extends Component {
  render() {
    return (
      <div id='header' className="container no-padding no-margin">
        <TopInfo/>
        <NavMenu/>
      </div>
    );
  }
}
