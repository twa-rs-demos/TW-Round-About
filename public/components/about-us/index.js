import {Component} from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import '../../style/aboutUs.less';

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
