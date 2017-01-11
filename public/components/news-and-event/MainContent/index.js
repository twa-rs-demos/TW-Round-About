import {Component} from 'react';
import Switch from './Switch';
import EventAndDate from './EventAndDate';
export default class MainContent extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className='col-md-10 col-md-offset-1 col-xs-12 col-sm-12'>
            <div className="row news-event-switch text-right">
              <Switch/>
            </div>
            <div className="row news-event">
              <EventAndDate/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
