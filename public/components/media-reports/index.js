import {Component} from 'react';
import MaxPicture from '../common/MaxPicture';
import RaInMedia from './RaInMedia';
import ContactForm from '../common/ContactForm';

export default class Press extends Component {

  render() {
    const pictureSrc = 'http://localhost/tw-ra/public/images/newsAndEvent/events.png';
    return (
      <div id="media-report">
        <MaxPicture src={pictureSrc}/>
        <RaInMedia/>
        <ContactForm title='Get in Touch'/>
      </div>
    );
  }
}
