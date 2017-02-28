import {Component} from 'react';
import VolunteerStory from '../common/VolunteerStory';
import MedicalAssitanceTop from '../common/AssitanceTop';
import Pagination from '../common/Pagination';

export default class NewsLetter extends Component {
  render() {
    const pictureSrc = 'http://localhost/tw-ra/public/images/assistance/banner_store.png';
    const title = 'March 2016';
    const describe = '';
    return (
      <div id="medical-assistance" className="row">
        <div className="col-xs-12 no-padding">
          <MedicalAssitanceTop title={title} pictureSrc={pictureSrc} describe={describe}/>
        </div>
        <div className='col-sm-offset-1 col-sm-10 no-padding'>
          <VolunteerStory title=''/>
          <Pagination totalPage="3"/>
        </div>
      </div>
    );
  }
}
