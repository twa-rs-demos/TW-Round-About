import {Component} from "react";
import newsAndEventDate from "../newsAndEventData";

export default class EventDay extends Component {

  render() {
    return (
      <div id='eventDay'>
        <div className='row'>
          <div className="col-xs-3 no-padding">
            <img src={newsAndEventDate[0].event.img}/>
          </div>

          <div className="col-xs-9 no-padding">
            <div className='event-date'>
              <p className='date'>3月 24日</p>
              <p className='time'>{newsAndEventDate[0].dates.firstDate.time}</p>
              <p>{newsAndEventDate[0].event.describe}</p>
            </div>

          </div>

        </div>
      </div>
    );
  }
}
