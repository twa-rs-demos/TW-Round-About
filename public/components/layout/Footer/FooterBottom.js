import React, {Component} from 'react';
import {Link} from 'react-router';
import '../../../style/legalPrivacyPolicy.css';

export default class FooterBottom extends Component {
  render() {
    return (
      <div className="col-xs-offset-6">
        <div className="footer-right-bottom">
          @2016 Roundabout China
          <Link to={URI_PREFIX + "/legal"} className="footBottom-info">&nbsp; Legal</Link>  |
          <Link to={URI_PREFIX + '/privacy-policy'} className="footBottom-info"> Privacy Policy</Link>
        </div>
      </div>
    )
  }
}
