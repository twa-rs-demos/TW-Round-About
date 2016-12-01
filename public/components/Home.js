import React, {Component} from "react";
import MenuList   from "./MenuList";
import RightTopinfo from "./RightTopinfo";
import ApplyMonthly from "./ApplyMonthly";
import Footer from "./Footer";
class Home extends Component {
  render() {
    return <div >
      <RightTopinfo/>
      <MenuList/>
      <ApplyMonthly/>
      <Footer/>
    </div>
  }
}
export default Home;

