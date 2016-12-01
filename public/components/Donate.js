import React, {Component} from 'react';
import RightTopinfo from "./RightTopinfo";
import MenuList from "./MenuList";
import ApplyMothly from "./ApplyMonthly";
import DonateWay from "./DonateWay";
import ItemDonate from "./ItemDonate";
import DonatingProjects from "./DonatingProjects";
export default class Donate extends Component {
  render() {
    return (
      <div>
        <RightTopinfo/>
        <MenuList/>
        <div className="donate-page-index">
          <DonateWay/>
          <ItemDonate/>
          <DonatingProjects/>
          <p>这里还需要一个翻页器组件</p>
        </div>
        <ApplyMothly/>
      </div>
    )
  }
}
