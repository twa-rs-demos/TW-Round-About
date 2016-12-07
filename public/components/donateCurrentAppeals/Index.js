import React, {Component} from 'react';
import RightTopinfo from '../common/RightTopinfo';
import MenuListinfo from '../common/MenuList';
import BeardCrumb from '../common/BreadCrumb';
import DonatingProjects from '../common/DonatingProjects';
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
