import React, {Component} from 'react';
import {DonatingProjects} from '../common/index';
import PictureMax from './PictureMax';
import DonateWay from "./DonateWay";
import ItemDonate from "./ItemDonate";
import "../../style/donate.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <PictureMax/>
        <div className="donate-page-index">
          <DonateWay/>
          <ItemDonate/>
          <DonatingProjects/>
          <p>这里还需要一个翻页器组件</p>
        </div>
      </div>
    )
  }
}
