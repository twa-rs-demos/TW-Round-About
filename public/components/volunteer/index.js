import {Component} from 'react';
import PictureMax from './PictureMax';
import StaticContent from './StaticContent';
import VolunteerStory from './VolunteerStory';
import '../../style/getInvolvedVolunteer.less';

export default class GetInvolvedVolunteer extends Component {
  render() {
    return (
      <div id='get-involved-volunteer'>
        <PictureMax/>
        <StaticContent/>
        <VolunteerStory/>
      </div>
    );
  }
}
