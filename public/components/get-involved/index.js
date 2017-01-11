import {Component} from 'react';
import {MaxPicture} from '../common/index';
import StaticContent from './StaticContent';

export default class getInvolved extends Component {
  render() {
    const pictureSrc = 'http://localhost/tw-ra/public/images/getInvolved/hero_getInvolved.png';
    return (
      <div id='get-involved' className='row'>
        <div>
          <MaxPicture src={pictureSrc}/>
        </div>
        <div className='col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10 no-padding'>
          <StaticContent/>
        </div>
      </div>
    );
  }
}
