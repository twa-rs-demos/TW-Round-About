import React, {Component} from 'react';
import RightTopinfo from "../share/RightTopinfo";
import MenuList   from "../share/MenuList";
import BreadCrumb from "../share/BreadCrumb";
import VolunteerStory from "./VolunteerStory";
import ApplyMonthly from "../share/ApplyMonthly";
import Footer from "../share/Footer";
import "../../style/getInvolvedVolunteer.css";

export default class GetInvolvedVolunteer extends Component {
  render() {
    return (
      <div>
        <RightTopinfo/>
        <MenuList/>
        <BreadCrumb/>
        <div className="max-image">
          <a href="#"><img src="./public/images/getInvolvedVolunteer/hero_volunteer.png"/></a>
        </div>

        <div className="involved-volunteer container">
          <h2 className="donate-way-title">我们是一个国际化的社区</h2>
          <p>Roundabout is a social enterprise headed by volunteers. We provide a free service connecting those who wish
            to give, be that monetary or otherwise, to those in need. Started in 2008, we were the first charity store
            in mainland China. We now give support to 48 charitable organizations in the Beijing area and many more
            throughout China, Inner Mongolia and Mongolia.
          </p>
        </div>

        <div className="involved-volunteer-join">
          <h2 className="donate-way-title">快来加入我们</h2>
          <button>现在申请成为志愿者</button>
        </div>

        <div className="involved-volunteer-area">
          <h2 className="donate-way-title">来自<span>50</span>多个国家和地区</h2>
          <img src="./public/images/getInvolvedVolunteer/50 countries.png"/>
        </div>
        <VolunteerStory/>
        <ApplyMonthly/>
        <Footer/>
      </div>
    )
  }
}
