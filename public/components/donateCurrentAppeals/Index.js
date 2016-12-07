import React, {Component} from 'react';
import {Header,BreadCrumb,DonatingProjects,ApplyMonthly,Footer} from '../common/index';
export default class DonateCurrentAppeal extends Component {
  render() {
    return (
      <div>
        <Header/>
        <BreadCrumb/>
        <DonatingProjects/>
        <ApplyMonthly/>
        <Footer/>
      </div>
    )
  }
}
