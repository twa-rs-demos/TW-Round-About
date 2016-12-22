import {Component} from 'react';
import FooterTopOne from './FooterTopOne';
import FooterTopTwo from './FooterTopTwo';
import FooterTopThree from './FooterTopThree';
import FooterTopFour from './FooterTopFour';

export default class FooterTop extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-xs-3 footer-top-one no-padding'>
          <FooterTopOne/>
        </div>
        <div className='col-xs-3 footer-top-two'>
          <FooterTopTwo/>
        </div>
        <div className='col-xs-2 footer-top-three'>
          <FooterTopThree/>
        </div>
        <div className='col-xs-4 footer-top-four'>
          <FooterTopFour/>
        </div>
      </div>
    );
  }
}
