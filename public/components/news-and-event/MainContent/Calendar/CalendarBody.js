import {Component} from "react";


export default class CalendarBody extends Component {

  getMonthDays() {//根据月份获取当前天数
    const temp = new Date(this.props.year, this.props.month, 0);
    return temp.getDate();
  }

  getFirstDayWeek() {//根据年月返回当月1号是星期几
    var dt = new Date(this.props.year + '/' + this.props.month + '/1');//new Date(year,month,1);
    return dt.getDay();
  }

  render() {

    let arry1 = [], arry2 = [], arry3 = [];

    var day = this.props.day;

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

    var node1 = arry1.map(function (item, index) {
      return <li key={index} style={{"background-color": "#F0F0F0"}}>{item}</li>
    });

    var node2 = arry2.map((item, index)=> {
      return (day == item) ? <li key={index} style={{"background-color": "#ec4c9a"}}>{item}</li> :
        <li key={index} style={{"background-color": "#F0F0F0"}}>{item}</li>
    });

    var node3 = arry3.map((item, index)=> {
      return <li key={index} style={{"background-color": "#F0F0F0"}}>{item}</li>
    });


    return (
      <div id="calendar-body">
        <div className="col-sm-offset-3 col-sm-7 ">
          <div className="weekday ">
            <ul>
              <li>日</li>
              <li>一</li>
              <li>二</li>
              <li>三</li>
              <li>四</li>
              <li>五</li>
              <li>六</li>
            </ul>
          </div>
          <div className="CalendarDay">
            <ul>{node1}{node2}{node3}</ul>
          </div>
        </div>
      </div>
    );
  }
}
