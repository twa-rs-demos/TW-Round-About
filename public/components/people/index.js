import {Component} from 'react';
import {MaxPicture} from '../common/';
import PeopleVolunteer from './PeopleVolunteer';
import OurLeaderShip from './OurLeaderShip';

export default class People extends Component {

  render() {
    const pictureSrc = 'http://localhost/tw-ra/public/images/people/people.jpg';
    return (
      <div id='people' className='container-fluid no-padding'>
        <MaxPicture src={pictureSrc}/>
        <PeopleVolunteer/>
        <OurLeaderShip/>
      </div>


    );
  }
}
