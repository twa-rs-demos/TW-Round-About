import React, {Component} from "react";
import MenuList   from "./MenuList";
import RightTopinfo from "./RightTopinfo";
import ApplyMonthly from "./ApplyMonthly";
import Footer from "./Footer";
import OurWorkItems from "./OurWorkItems";
import CenterStaticContent from './CenterStaticContent';

class Home extends Component {
  render() {
    return (<div >
      <RightTopinfo/>
      <MenuList/>
      <CenterStaticContent />
      <OurWorkItems/>
      <ApplyMonthly/>
      <Footer/>
    </div>)
  }
}
export default Home;

