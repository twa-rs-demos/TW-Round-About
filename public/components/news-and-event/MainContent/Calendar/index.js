import {Component} from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";

export default class Calendar extends Component {

  constructor(props) {
    var newDate = new Date('2016-3-7');
    super(props);
    this.state = {
      year: newDate.getFullYear(),
      month: parseInt(newDate.getMonth()),
      day: newDate.getDay()
    };
  }

  handleFilterUpdate(filterYear, filterMonth) {
    this.setState({
      year: filterYear,
      month: filterMonth,
      day: this.state.day
    });
  }

  render() {
    return (
      <div id='calendar'>
        <CalendarHeader
          year={this.state.year}
          month={this.state.month}
          updateFilterData={this.handleFilterUpdate.bind(this)}/>

        <CalendarBody
          year={this.state.year}
          month={this.state.month}
          day={this.state.day}
        />

      </div>
    );
  }
}


