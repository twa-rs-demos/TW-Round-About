import {Component} from 'react';
import Switch from './Switch';
import Events from './Events';
import Dates from './Dates';

export default class MainContent extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className='col-md-10 col-md-offset-1'>
            <div className="row news-event-switch">
                <Switch/>
            </div>
            <div className="row news-event-row">
              <div className='col-md-9'>
                <Events/>
              </div>
              <div className='col-md-3 no-padding'>
                <Dates/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
