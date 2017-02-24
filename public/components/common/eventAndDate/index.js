import {Component} from 'react';
import Switch from './Switch';
import EventAndDate from './EventAndDate';
import Calendar from './Calendar';
import Pagination from '../Pagination';

export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: 'eventAndDate'
    };
  }

  showEventAndDate() {
    this.setState({
      showContent: 'eventAndDate'
    });
  }

  showCalendar() {
    this.setState({
      showContent: 'calendar'
    });
  }


  render() {
    return (
      <div className='container' id="event-and-date">
        <div className='row'>
          <div className='col-md-10 col-md-offset-1 col-xs-12 col-sm-12'>
            <div className='row news-event-switch text-right'>
              <Switch showEventAndDateContent={this.showEventAndDate.bind(this)}
                      showCalendarContent={this.showCalendar.bind(this)}
                      state={this.state.showContent}/>
            </div>
            <div id="news-event" className={this.state.showContent === 'eventAndDate' ? '' : 'hidden'}>
              <EventAndDate/>
            </div>

            <div className={this.state.showContent === 'calendar' ? '' : 'hidden'}>
              <Calendar/>
            </div>
          <Pagination totalPage="3"/>
          </div>
        </div>
      </div>
    );
  }
}
