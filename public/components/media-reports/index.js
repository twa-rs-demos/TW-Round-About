import {Component} from 'react';
import MaxPicture from '../common/MaxPicture';
import RaInMedia from './RaInMedia';
import Touch from './Touch';

export default class Press extends Component {

  render() {
    const pictureSrc = 'http://localhost/tw-ra/public/images/newsAndEvent/events.png';
    return (
      <div id="media-report">
        <MaxPicture src={pictureSrc}/>
        <RaInMedia/>
        <Touch/>
      </div>
    );
  }
}
