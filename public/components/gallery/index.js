import {Component} from "react";
import Picture from "./Picture";
import Content from "./Content";

export default class Gallery extends Component {

  render() {
    return (
      <div id='gallery'>
        <Picture/>
        <Content/>
      </div>
    );
  }
}
