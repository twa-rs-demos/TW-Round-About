import React, {Component} from 'react';
import NewsAndCalendar from '../common/NewsAndCalendar/index';
import datas from './newsAndEventData';

export default class BookFairsNotice extends Component {
  render() {
    return (
      <div className="bookfair-notice">
        <div>
          <h2 className="middle-title">书市预告</h2>
        </div>
        <NewsAndCalendar datas={datas} />
      </div>
    );
  }
}
