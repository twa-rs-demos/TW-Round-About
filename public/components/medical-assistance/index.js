import {Component} from 'react';
import VolunteerStory from '../common/VolunteerStory';
import MedicalAssitanceTop from '../common/AssitanceTop';

export default class MedicalAssitance extends Component {
  render() {
    const src = '';
    const title = '';
    return (
      <div id="medical-assistance" className="row">
        <MedicalAssitanceTop src={this.props.src} title={this.props.title}/>
        <div className='col-sm-offset-1 col-sm-10 no-padding'>
          <VolunteerStory title=""/>
        </div>
      </div>
    );
  }
}
