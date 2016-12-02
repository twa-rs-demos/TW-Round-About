import React, {Component} from "react";
import RightTopinfo from "./RightTopinfo";
import MenuList   from "./MenuList";
import CenterMedia from './CenterMeida';
import OurWorkItems from "./OurWorkItems";
import ApplyMonthly from "./ApplyMonthly";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (<div >
      <RightTopinfo/>
      <MenuList/>
      <CenterMedia />
      <OurWorkItems/>
      <ApplyMonthly/>
      <Footer/>
    </div>)
  }
}
export default Home;

