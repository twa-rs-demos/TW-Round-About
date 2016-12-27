import {Component} from 'react';
import PictureMax from './PictureMax';
import StaticContent from './StaticContent';
import VolunteerStory from './VolunteerStory';
import '../../style/getInvolvedVolunteer.css';

export default class GetInvolvedVolunteer extends Component {
  render() {
    return (
      <div>
        <PictureMax/>
        <StaticContent/>
        <VolunteerStory/>
      </div>
    );
  }
}
