import React, {Component} from 'react';
import RightTopinfo from "../common/RightTopinfo";
import MenuList from "../common/MenuList";
import Logo from '../common/Logo';

export default class Header extends Component{
  render(){
    return (
      <div className="header row">
        <RightTopinfo/>
        <Logo/>
        <MenuList/>
      </div>
    )
  }
}
