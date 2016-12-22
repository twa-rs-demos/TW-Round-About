import {Component} from 'react';
import NavMenu from './NavMenu';
import TopInfo from './TopInfo';
import '../../../style/header.css';

export default class Header extends Component {
  render() {
    return (
      <div id='header'>
        <TopInfo/>
        <NavMenu/>
      </div>
    );
  }
}
