import {Component} from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

export default class Footer extends Component {
  render() {
    return (
      <div id="footer" className='container'>
        <FooterTop/>
        <FooterBottom/>
      </div>
    );
  }
}
