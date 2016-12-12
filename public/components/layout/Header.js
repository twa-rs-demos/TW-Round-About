import React, {Component} from 'react';
import RightTopinfo from "./RightTopinfo";
import MenuList from "./MenuList";
import Logo from './Logo';
import SearchBox from './SearchBox';

export default class Header extends Component {
  render() {
    return (
      <div className="header row">
        <RightTopinfo/>
        <Logo/>
        <div className="col-sm-12 no-padding ">
          <MenuList/>
          <SearchBox/>
        </div>
      </div>
    )
  }
}
