import {Component} from 'react';
import VolunteerStory from '../common/VolunteerStory';
import MedicalAssitanceTop from '../common/AssitanceTop';
import Pagination from '../common/Pagination';

export default class MedicalAssitance extends Component {
  render() {
    const pictureSrc = 'http://localhost/tw-ra/public/images/assistance/banner_store.png';
    const title = '医疗救助';
    const describe = 'RoundAbout is a social enterprise headed by volunteer. We provide a free service connecting those who wish to give, be that monetary of otherwise,to those in need. Started in 2008,we';
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
