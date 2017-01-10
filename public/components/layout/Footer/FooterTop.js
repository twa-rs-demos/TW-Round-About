import {Component} from 'react';
import FooterTopOne from './FooterTopOne';
import FooterTopTwo from './FooterTopTwo';
import FooterTopThree from './FooterTopThree';
import FooterTopFour from './FooterTopFour';

export default class FooterTop extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-sm-3 col-xs-12 no-padding footer-item'>
          <FooterTopOne/>
        </div>
        <div className='col-sm-3 col-xs-12 no-padding footer-item'>
          <FooterTopTwo/>
        </div>
        <div className='col-sm-2 col-xs-12 no-padding footer-item'>
          <FooterTopThree/>
        </div>
        <div className='col-sm-4 col-xs-12 no-padding footer-item'>
          <FooterTopFour/>
        </div>
      </div>
    );
  }
}
