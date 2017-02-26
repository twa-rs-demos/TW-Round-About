import {Component} from "react";
import {chunk} from "lodash";

export default class CalendarBody extends Component {

  getMonthDays() {//根据月份获取当前天数
    const temp = new Date(this.props.year, this.props.month, 0);
    return temp.getDate();
  }

  getFirstDayWeek() {//根据年月返回当月1号是星期几
    var dt = new Date(this.props.year + '/' + this.props.month + '/1');//new Date(year,month,1);
    return dt.getDay();
  }


  isEventDay(day) {
    return this.props.eventDays.find((eventDay)=> {
      return eventDay === day;
    });
  }

  render() {

    let arry1 = [], arry2 = [], arry3 = [];


    for (let i = 0; i < this.getFirstDayWeek(); i++) {
      const lastMonth = new Date(this.props.year, this.props.month - 1, 0);
      arry1[i] = lastMonth.getDate() - i;
    }

    for (let j = 0; j < this.getMonthDays(); j++) {
      arry2[j] = (j + 1);
    }
    for (let k = 0; k < 35 - arry1.length - arry2.length; k++) {
      arry3[k] = (k + 1);
    }

    const calendarData = arry1.concat(arry2).concat(arry3);
    const calendarArrays = chunk(calendarData, 7);

    const calendar = calendarArrays.map((calendarArray, index)=> {
      return <div key={index} className="row">
        {
          calendarArray.map((date, index)=> {
            const days = (this.isEventDay(date)) ? 'eventDay' : 'usualDay';
            return <div className={`day col-xs-1 col-sm-1 ${days}`} key={index}>{date}</div>
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
