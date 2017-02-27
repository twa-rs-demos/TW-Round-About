import {Component} from "react";

export default class CalendarHeader extends Component {

  handleLeftClick(year, month) {
    var newMonth = parseInt(month) - 1;
    if (newMonth < 1) {
      year--;
      newMonth = 12;
    }
    this.props.updateFilterData(year, newMonth);
  }

  handleRightClick(year, month) {
    var newMonth = parseInt(month) + 1;
    if (newMonth > 12) {
      year++;
      newMonth = 1;
    }
    this.props.updateFilterData(year, newMonth);
  }

  render() {
    return (
      <div id='calendar-header'>
        <div className='text-center calendar-header'>
          <i className='fa fa-caret-left fa-4x icon-style icon-left'
             onClick={this.handleLeftClick.bind(this, this.props.year, this.props.month)}>
          </i>
          <span className='year-style'>{this.props.year} {this.props.month}月</span>
          <i className='fa fa-caret-right fa-4x icon-style icon-right'
             onClick={this.handleRightClick.bind(this, this.props.year, this.props.month)}>
          </i>
        </div>
      </div>
    );
  }
}
