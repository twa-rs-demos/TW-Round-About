import {Component} from 'react';

export default class Events extends Component {

  render() {
    return (
      <div id='aboutUs-years-events'>
        <div className='fist-event'>
          <div>{this.props.firstEvent}</div>
          <div>{this.props.firstEventTime}</div>
        </div>

        <div className='second-event'>
          <div>{this.props.secondEvent}</div>
          <div>{this.props.secondEventTime}</div>
        </div>
      </div>
    );
  }
}

