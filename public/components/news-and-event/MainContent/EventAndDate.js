import {Component} from 'react';
import Events from './Events';
import Dates from './Dates';


export default class EventAndDate extends Component {
  getEventDateRow(datas) {
    return datas.map((item)=> {
      return (
        <div className='row row-margin-bottom'>
          <div className="col-md-8 col-xs-12">
            <Events data={item.event}/>
          </div>
          <div className="col-md-4 col-xs-12">
            <Dates data={item.dates}/>
          </div>
        </div>
      );
    });
  }


  render() {
    const datas = [
      {
        event: {
          img: 'http://localhost/tw-ra/public/images/newsAndEvent/events.png',
          category: 'VOLUNTEEER STORY',
          people: 'Mr Raj',
          describe: 'Roundabout is a social enterprise headed by volunteers. We provide a free service connecting those who wish to give, be that ...',
        },
        dates: {
          firstDate: {num: '13', date: 'Fri, 13 March', time: '10:00am-14:00pm'},
          secondDate: {num: '13', date: 'Fri, 13 March', time: '10:00am-14:00pm'}
        }
      }, {
        event: {
          img: 'http://localhost/tw-ra/public/images/newsAndEvent/events.png',
          category: 'VOLUNTEEER STORY',
          people: 'Mr Raj',
          describe: 'Roundabout is a social enterprise headed by volunteers. We provide a free service connecting those who wish to give, be that ...',
        },
        dates: {
          firstDate: {num: '13', date: 'Fri, 13 March', time: '10:00am-14:00pm'},
          secondDate: {num: '13', date: 'Fri, 13 March', time: '10:00am-14:00pm'}
        }
      }, {
        event: {
          img: 'http://localhost/tw-ra/public/images/newsAndEvent/events.png',
          category: 'VOLUNTEEER STORY',
          people: 'Mr Raj',
          describe: 'Roundabout is a social enterprise headed by volunteers. We provide a free service connecting those who wish to give, be that ...',
        },
        dates: {
          firstDate: {num: '13', date: 'Fri, 13 March', time: '10:00am-14:00pm'},
          secondDate: {num: '13', date: 'Fri, 13 March', time: '10:00am-14:00pm'}
        }
      }, {
        event: {
          img: 'http://localhost/tw-ra/public/images/newsAndEvent/events.png',
          category: 'VOLUNTEEER STORY',
          people: 'Mr Raj',
          describe: 'Roundabout is a social enterprise headed by volunteers. We provide a free service connecting those who wish to give, be that ...',
        },
        dates: {
          firstDate: {num: '13', date: 'Fri, 13 March', time: '10:00am-14:00pm'},
          secondDate: {num: '13', date: 'Fri, 13 March', time: '10:00am-14:00pm'}
        }
      },];

    return (
      <div>
        {this.getEventDateRow(datas)}
      </div>
    );
  }
}
