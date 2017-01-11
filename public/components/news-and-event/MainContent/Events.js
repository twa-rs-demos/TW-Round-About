import {Component} from 'react';

export default class Events extends Component {

  getEvent(events) {
    return events.map((item)=> {
      return (
        <div className="row events-row">
          <div className="col-md-6">
            <img src={item.img}/>
          </div>
          <div className="col-md-6 text">
            <h3>{item.category}<br/>
              @ {item.people}
            </h3>
            <p>{item.describe}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    const events = [
      {
        img: 'http://localhost/tw-ra/public/images/newsAndEvent/events.png',
        category: 'VOLUNTEEER STORY',
        people: 'Mr Raj',
        describe: 'Roundabout is a social enterprise headed by volunteers. We provide a free service connecting those who wish to give, be that ...'
      },
      {
        img: 'http://localhost/tw-ra/public/images/newsAndEvent/events.png',
        category: 'VOLUNTEEER STORY',
        people: 'Mr Raj',
        describe: 'Roundabout is a social enterprise headed by volunteers. We provide a free service connecting those who wish to give, be that ...'
      },
      {
        img: 'http://localhost/tw-ra/public/images/newsAndEvent/events.png',
        category: 'VOLUNTEEER STORY',
        people: 'Mr Raj',
        describe: 'Roundabout is a social enterprise headed by volunteers. We provide a free service connecting those who wish to give, be that ...'
      },
      {
        img: 'http://localhost/tw-ra/public/images/newsAndEvent/events.png',
        category: 'VOLUNTEEER STORY',
        people: 'Mr Raj',
        describe: 'Roundabout is a social enterprise headed by volunteers. We provide a free service connecting those who wish to give, be that ...'
      }
    ];
    return (
        <div id='events'>
          {this.getEvent(events)}
        </div>
    );
  }
}
