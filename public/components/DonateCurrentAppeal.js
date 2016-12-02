import React, {Component} from 'react';
import RightTopinfo from './RightTopinfo';
import MenuListinfo from './MenuList';
import BeardCrumb from './BreadCrumb';
import DonatingProjects from './DonatingProjects';
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
