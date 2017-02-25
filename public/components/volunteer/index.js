import {Component} from 'react';
import VolunteerStory from './VolunteerStory';
import StaticContent from './StaticContent';
import {MaxPicture} from '../common/';

export default class GetInvolvedVolunteer extends Component {
  render() {
    const pictureSrc = 'http://localhost/tw-ra/public/images/getInvolvedVolunteer/hero_volunteer.png';
    return (
      <div id='get-involved-volunteer' className='row no-margin no-padding'>
        <div className='col-xs-12 no-padding'>
          <MaxPicture src={pictureSrc}/>
        </div>
        <div className='col-xs-12 no-padding'>
          <StaticContent/>
        </div>
        <div className='col-sm-offset-1 col-sm-10 no-padding'>
          <VolunteerStory/>
        </div>
      </div>
    );
  }
}
