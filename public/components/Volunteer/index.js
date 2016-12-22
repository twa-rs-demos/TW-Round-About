import {Component} from 'react';
import {BreadCrumb} from '../common/index';
import PictureMax from './PictureMax';
import StaticContent from './StaticContent';
import VolunteerStory from './VolunteerStory';
import '../../style/getInvolvedVolunteer.css';

export default class GetInvolvedVolunteer extends Component {
  render() {
    return (
      <div>
        <BreadCrumb/>
        <PictureMax/>
        <StaticContent/>
        <VolunteerStory/>
      </div>
    );
  }
}
