import {Component} from "react";
import Switch from "./Switch";
import EventAndDate from "./EventAndDate";
import Calendar from "./Calendar/index";

export default class NewsAndCalendar extends Component {
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
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 col-md-offset-1 col-xs-12 col-sm-12'>
            <div className='row news-event-switch text-right'>
              <Switch showEventAndDateContent={this.showEventAndDate.bind(this)}
                      showCalendarContent={this.showCalendar.bind(this)}
                      state={this.state.showContent}/>
            </div>
            <div id='news-event' className={this.state.showContent === 'eventAndDate' ? '' : 'hidden'}>
              <EventAndDate datas={this.props.datas}/>
            </div>

            <div className={this.state.showContent === 'calendar' ? '' : 'hidden'}>
              <Calendar/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
