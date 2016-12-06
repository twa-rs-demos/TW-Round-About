import React, {Component} from 'react';
import RightTopinfo from '../share/RightTopinfo';
import MenuListinfo from '../share/MenuList';
import BeardCrumb from '../share/BreadCrumb';
import DonatingProjects from '../share/DonatingProjects';
export default class DonateCurrentAppeal extends Component {
  render() {
    return (
      <div>
        <RightTopinfo/>
        <MenuListinfo/>
        <BeardCrumb/>
        <DonatingProjects/>
      </div>
    )
  }
}
