import {Component} from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './footer/index';
import superagent from 'superagent';
import noCache from 'superagent-no-cache';

export default class AboutUs extends Component {

  render() {
    return (
      <div className='container-fluid no-padding' id='aboutUs'>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}
