import React, {Component} from 'react';
import {Header, Footer, ApplyMonthly} from "../common/index";
// import RightTopinfo from "../common/RightTopinfo";
// import MenuList   from "../common/MenuList";
import Video from "./Video";
import OurWorkItems from "./OurWorkItems";
// import ApplyMonthly from "../common/ApplyMonthly";
// import Footer from "../common/Footer";
import "../../style/index.css";
import "../../style/ourWork.css";

export default class OurWork extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Video/>
        <OurWorkItems/>
        <ApplyMonthly/>
        <Footer/>
      </div>
    )
  }
}
