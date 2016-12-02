import React, {Component} from 'react';
import RightTopinfo from "./RightTopinfo";
import MenuList   from "./MenuList";
import BreadCrumb from "./BreadCrumb";
import ApplyMonthly from "./ApplyMonthly";
import Footer from "./Footer";

export default class GetInvolvedVolunteer extends Component {
  render() {
    return (
      <div>
        <RightTopinfo/>
        <MenuList/>
        <BreadCrumb/>
        <ApplyMonthly/>
        <Footer/>
      </div>
    )
  }
}
