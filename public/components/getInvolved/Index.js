import React, {Component} from 'react';
import {Header, Footer, ApplyMonthly} from "../common/index";
import PictureMax from './PictureMax';
import StaticContent from './StaticContent';
import '../../style/getInvolved.css';

export  default  class getInvolved extends Component {
  render() {
    return (
      <div>
        <Header/>
        <PictureMax/>
        <StaticContent/>
        <ApplyMonthly/>
        <Footer/>
      </div>
  )
  }


  }
