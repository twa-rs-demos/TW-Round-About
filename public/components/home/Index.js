import React, {Component} from "react";
// import {Header, Footer, ApplyMonthly} from "../common/index";
import PictureMax from "./PictureMax";
import OurWorkItems from "./OurWorkItems";
import Video from "../home/Video";
import "../../style/index.css";

export default class Home extends Component {
  render() {
    return (<div>
      {/*<Header/>*/}
      <PictureMax/>
      <Video/>
      <OurWorkItems/>
      {/*<ApplyMonthly/>*/}
      {/*<Footer/>*/}
    </div>)
  }
}

