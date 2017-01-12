import {Component} from 'react';

export default class Switch extends Component {
  showEventAndDate() {
    this.props.showEventAndDateContent();
  }

  calendar() {
    this.props.showCalendarContent();
  }

  render() {
    return (
      <div>
        <span className={this.props.state === 'eventAndDate' ? 'choosed' : ''}
              onClick={this.showEventAndDate.bind(this)}>列表</span>
        <span className={this.props.state === 'calendar' ? 'choosed' : ''}
              onClick={this.calendar.bind(this)}>&nbsp;
          |&nbsp;日历</span>
      </div>
    );
  }
}
