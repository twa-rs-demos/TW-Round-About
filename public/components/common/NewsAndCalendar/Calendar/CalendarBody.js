import {Component} from "react";
import {chunk} from "lodash";
import {Tooltip, OverlayTrigger} from "react-bootstrap";
import EventDay from "./EventDay";

export default class CalendarBody extends Component {

  getMonthDays() {
    const temp = new Date(this.props.year, this.props.month, 0);
    return temp.getDate();
  }

  getFirstDayWeek() {
    var dt = new Date(this.props.year + '/' + this.props.month + '/1');
    return dt.getDay();
  }

  isEventDay(day) {
    return this.props.eventDays.find((eventDay) => {
      return eventDay === day;
    });
  }

  render() {
    const tooltip = (
      <Tooltip id='tooltip'>
        <EventDay year={this.props.year} month={this.props.month}
                  eventDays={this.props.eventDays}/>
      </Tooltip>
    );

    let lastMonthDays = new Array(this.getFirstDayWeek()).fill(0).map((day, index) => {
      const lastMonth = new Date(this.props.year, this.props.month - 1, 0);
      return lastMonth.getDate() - index;
    });

    let nowMonthDays = new Array(this.getMonthDays()).fill(0).map((day, index) => {
      return index + 1;
    });

    let nextMonthDays = new Array(35 - lastMonthDays.length - nowMonthDays.length).fill(0).map((day, index) => {
      return index + 1;
    });

    const calendarData = lastMonthDays.concat(nowMonthDays).concat(nextMonthDays);
    const calendarArrays = chunk(calendarData, 7);

    const calendar = calendarArrays.map((calendarArray, index) => {
      return <div key={index} className='row'>
        {
          calendarArray.map((date, index) => {
            if (this.isEventDay(date)) {
              return (
                <div key={index}>
                  <OverlayTrigger placement='bottom' overlay={tooltip}>
                    <div className='day col-xs-1 col-sm-1 eventDay'>{date}</div>
                  </OverlayTrigger>
                </div>
              );
            }
            return <div className='day col-xs-1 col-sm-1 usualDay' key={index}>{date}</div>;
          })
        }
      </div>;
    });

    return (
      <div id='calendar-body'>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-10 col-sm-offset-2 col-sm-10'>
            <div className='row weekday'>
              <div className='col-sm-1 col-xs-1 weekdays'>日</div>
              <div className='col-sm-1 col-xs-1 weekdays'>一</div>
              <div className='col-sm-1 col-xs-1 weekdays'>二</div>
              <div className='col-sm-1 col-xs-1 weekdays'>三</div>
              <div className='col-sm-1 col-xs-1 weekdays'>四</div>
              <div className='col-sm-1 col-xs-1 weekdays'>五</div>
              <div className='col-sm-1 col-xs-1 weekdays'>六</div>
            </div>

            <div className='CalendarDay'>
              {calendar}
            </div>
          </div>
        </div>
      </div>

    );
  }
}
