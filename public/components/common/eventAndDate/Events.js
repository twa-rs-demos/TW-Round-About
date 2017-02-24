import {Component} from 'react';

export default class Events extends Component {

  constructor(props) {
    super(props);
    this.state = {
      event: this.props.data
    };
  }

  render() {
    let event = this.props.data;
    return (
      <div id='events' className='row'>
        <div className='col-md-5 col-sm-4 col-xs-4'>
          <img src={event.img}/>
        </div>
        <div className='col-md-7 col-sm-8 col-xs-8 text'>
          <h3>{event.category}<br/>
            @ {event.people}
          </h3>
          <p>{event.describe}</p>
        </div>
      </div>
    );
  }
}
