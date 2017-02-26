import {Component} from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";

export default class Calendar extends Component {

  constructor(props) {
    var newDate = new Date('2016-4-7');
    super(props);
    this.state = {
      year: newDate.getFullYear(),
      month: parseInt(newDate.getMonth()),
      eventDays: [5, 16, 28, 30]
    };
  }

  handleFilterUpdate(filterYear, filterMonth) {
    this.setState({
      year: filterYear,
      month: filterMonth,
      eventDays: this.state.eventDays
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
          eventDays={this.state.eventDays}
        />

      </div>
    );
  }
}


