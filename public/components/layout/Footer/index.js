import React, {Component} from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import '../../../style/footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer container">
        <FooterTop/>
        <FooterBottom/>
      </div>
    )
  }
}
