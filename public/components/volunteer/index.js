import {Component} from 'react';
import StaticContent from './StaticContent';
import VolunteerStory from './VolunteerStory';
import {MaxPicture} from '../common/'
import '../../style/volunteer.less';

export default class GetInvolvedVolunteer extends Component {
  render() {
    const pictureSrc = 'http://localhost/tw-ra/public/images/getInvolvedVolunteer/hero_volunteer.png';
    return (
      <div id='get-involved-volunteer'>
        <MaxPicture  src={pictureSrc}/>
        <StaticContent/>
        <VolunteerStory/>
      </div>
    );
  }
}
