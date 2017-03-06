import {Component} from 'react';
import FooterTopOne from './FooterTopOne';
import FooterTopTwo from './FooterTopTwo';
import FooterTopThree from './FooterTopThree';
import FooterTopFour from './FooterTopFour';

export default class FooterTop extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-3 col-sm-6 col-xs-12 no-padding footer-item'>
          <FooterTopOne/>
        </div>
        <div className='col-md-3 col-sm-6 col-xs-12 no-padding footer-item'>
          <FooterTopTwo/>
        </div>
        <div className='col-md-2 col-sm-7 col-xs-12 no-padding footer-item'>
          <FooterTopThree/>
        </div>
        <div className='col-md-4 col-sm-12 col-xs-12 no-padding footer-item'>
          <FooterTopFour/>
        </div>
      </div>
    );
  }
}
