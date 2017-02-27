import React, {Component} from 'react';
import EventAndDate from '../common/eventAndDate/index';

export default class BookFairsNotice extends Component {
  render() {
    return (
      <div className="bookfair-notice">
        <div>
          <h2 className="middle-title">书市预告</h2>
        </div>
        <EventAndDate/>
      </div>
    );
  }
}
