import React, {Component} from 'react';
import Video from "./Video";
import OurWorkItems from "./OurWorkItems";
import "../../style/ourWork.css";

export default class OurWork extends Component {
  render() {
    return (
      <div>
        <Video/>
        <OurWorkItems/>
      </div>
    )
  }
}
