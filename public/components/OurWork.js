import React, {Component} from 'react';
import RightTopinfo from "./RightTopinfo";
import MenuList   from "./MenuList";

import ApplyMonthly from "./ApplyMonthly";
import Footer from "./Footer";

export default class OurWork extends Component{
  render(){
    return (
      <div>
        <RightTopinfo/>
        <MenuList/>

        <div className="our-work-center-text">
          <h1>众爱是希望的桥梁</h1>
          <p>我们为全国各地需要帮助的孩子募集善款，并把他们推荐给能帮助他们的团体或者个人。</p>
        </div>

        <div className="what-do">
          <h1>我们都做什么</h1>
        </div>

        <div className="our-jods-icons container">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
            <a href="#" >
              <img src="./public/images/our-work/icon_leukemia assistance_bg.png" alt="白血病救助" /><span className="jod-text">白血病救助</span>
            </a>
            </div>
            <a href="#" className="col-lg-3">
              <img src="./public/images/our-work/icon_disaster relief_bg.png" alt="医疗救助" /><span className="jod-text">医疗救助</span>
            </a>
            <a href="#" className="col-lg-3 col-lg-offset-1">
              <img src="./public/images/our-work/icon_education support_bg.png" alt="教育资助" /><span className="jod-text">教育资助</span>
            </a>
            <div className="col-lg-1"></div>
          </div>
          <div className="row our-jobs-icons-second">
            <div className="col-md-3"></div>
            <a href="#" className="col-md-3">
              <img src="./public/images/our-work/icon_medical assistance_bg.png" alt="灾区救助" /><span className="jod-text" id="disater-rescue-text">灾区救助</span>
            </a>

            <a href="#" className="col-md-4 col-lg-offset-1">
              <img src="./public/images/our-work/icon_community assistance_bg.png" alt="社区帮扶" /><span className="jod-text" id="community-rescue-text">社区帮扶</span>
            </a>

          </div>

        </div>
        <ApplyMonthly/>
        <Footer/>
      </div>
    )
  }
}
