import {Component} from "react";
import {chunk} from "lodash";

export default class CalendarBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showEvent: false
    }
  }

  getMonthDays() {//根据月份获取当前天数
    const temp = new Date(this.props.year, this.props.month, 0);
    return temp.getDate();
  }

  getFirstDayWeek() {//根据年月返回当月1号是星期几
    var dt = new Date(this.props.year + '/' + this.props.month + '/1');//new Date(year,month,1);
    return dt.getDay();
  }

  showEvent() {
    this.setState({
      showEvent: false
    })
  }

  isEventDay(day) {
    return this.props.eventDays.find((eventDay)=> {
      return eventDay === day;
    });
  }

  render() {

    let lastMonthDays = new Array(this.getFirstDayWeek()).fill(0).map((day, index)=> {
      const lastMonth = new Date(this.props.year, this.props.month - 1, 0);
      return lastMonth.getDate() - index;
    });

    let nowMonthDays = new Array(this.getMonthDays()).fill(0).map((day, index)=> {
      return index + 1;
    });

    let nextMonthDays = new Array(35 - lastMonthDays.length - nowMonthDays.length).fill(0).map((day, index)=> {
      return index + 1;
    });

    const calendarData = lastMonthDays.concat(nowMonthDays).concat(nextMonthDays);
    const calendarArrays = chunk(calendarData, 7);

    const calendar = calendarArrays.map((calendarArray, index)=> {
      return <div key={index} className="row">
        {
          calendarArray.map((date, index)=> {
            const days = (this.isEventDay(date)) ? 'eventDay' : 'usualDay';
            return <div className={`day col-xs-1 col-sm-1 ${days}` } key={index}
                        onClick={(this.isEventDay(date)) ? this.showEvent.bind(this) : ''}>{date}
            </div>
          })
        }
      </div>;
    });

    return (
      <div id="calendar-body" className="container">
        <div className="row">
          <div className="col-xs-offset-1 col-xs-11 col-sm-12">
            <div className="row weekday">
              <div className='col-sm-1 col-xs-1 weekdays'>日</div>
              <div className='col-sm-1 col-xs-1 weekdays'>一</div>
              <div className='col-sm-1 col-xs-1 weekdays'>二</div>
              <div className='col-sm-1 col-xs-1 weekdays'>三</div>
              <div className='col-sm-1 col-xs-1 weekdays'>四</div>
              <div className='col-sm-1 col-xs-1 weekdays'>五</div>
              <div className='col-sm-1 col-xs-1 weekdays'>六</div>
            </div>

            <div className="CalendarDay">
              {calendar}
            </div>
          </div>
        </div>
      </div>

    );
  }
}
