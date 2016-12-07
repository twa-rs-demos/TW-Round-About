import React, {Component} from 'react';
import RightTopinfo from "../common/RightTopinfo";
import MenuList from "../common/MenuList";
import DonateWay from "./DonateWay";
import ItemDonate from "./ItemDonate";
import DonatingProjects from "../common/DonatingProjects";
import ApplyMothly from "../common/ApplyMonthly";
import Footer from '../common/Footer';
import "../../style/donate.css";

export default class Donate extends Component {
  render() {
    return (
      <div>
        <RightTopinfo/>
        <MenuList/>
        <div className="donate-img middle-image">
          <div className="donate-img-text">
            <h2>“施比受更为有福。”</h2>
            <h3>—— St Francis of Assisi</h3>
          </div>
        </div>
        <div className="donate-page-index">
          <DonateWay/>
          <ItemDonate/>
          <DonatingProjects/>
          <p>这里还需要一个翻页器组件</p>
        </div>
        <ApplyMothly/>
        <Footer/>
      </div>
    )
  }
}
