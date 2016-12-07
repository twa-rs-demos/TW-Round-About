import  React, {Component} from 'react';
import {Header, BreadCrumb, Footer, ApplyMonthly} from '../common/index';
import PictureMax from './PictureMax';
import  ContentStatic from './StaticContent';
import '../../style/ourWorkAssistance.css';

export  default  class ourWorkPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <BreadCrumb/>
        <PictureMax/>
        <ContentStatic/>
        <ApplyMonthly/>
        <Footer/>
      </div>
    )
  }
}
