import {Component} from 'react';
import {Link} from 'react-router';
import '../../../style/legalPrivacyPolicy.less';

export default class FooterBottom extends Component {
  render() {
    return (
      <div className='col-sm-offset-6 col-sm-6 col-xs-12'>
        <div className='footer-bottom-text'>
          @2016 Roundabout China
          <Link to={URI_PREFIX + '/legal'} className='footBottom-info'>&nbsp; Legal</Link> |
          <Link to={URI_PREFIX + '/privacypolicy'} className='footBottom-info'> Privacy Policy</Link>
        </div>
      </div>
    );
  }
}
