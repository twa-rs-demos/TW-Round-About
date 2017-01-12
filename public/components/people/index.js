import {Component} from 'react';
import {MaxPicture} from '../common/';
import PeopleVolunteer from './PeopleVolunteer';
import OurLeaderShip from './OurLeaderShip';
import OurCommityLeaders from './OurCommityLeaders';
import OurTeam from './OurTeam';

export default class People extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showVolunteerForm: false
    };
  }

  showApplicationForm() {
    this.setState({
      showVolunteerForm: true
    });
  }

  closeForm() {
    this.setState({
      showVolunteerForm: false
    });
  }

  render() {
    const pictureSrc = 'http://localhost/tw-ra/public/images/people/people.jpg';
    return (
      <div id='people' className='container-fluid no-padding'>
        <MaxPicture src={pictureSrc}/>
        <PeopleVolunteer showApplicationForm={this.showApplicationForm.bind(this)}
                         closeForm={this.closeForm.bind(this)} state={this.state.showVolunteerForm}
        />
        <OurLeaderShip/>
        <OurCommityLeaders/>
        <OurTeam showApplicationForm={this.showApplicationForm.bind(this)}
                 closeForm={this.closeForm.bind(this)} state={this.state.showVolunteerForm}/>
      </div>

    );
  }
}
