import React, {Component} from 'react';
import {Header, BreadCrumb, Footer, ApplyMonthly} from '../common/index';
import PictureMax from './PictureMax';
import StaticContent from './StaticContent';
import VolunteerStory from "./VolunteerStory";
import "../../style/getInvolvedVolunteer.css";

export default class GetInvolvedVolunteer extends Component {
  render() {
    return (
      <div>
        <Header/>
        <BreadCrumb/>
        <PictureMax/>
        <StaticContent/>
        <VolunteerStory/>
        <ApplyMonthly/>
        <Footer/>
      </div>
    )
  }
}
