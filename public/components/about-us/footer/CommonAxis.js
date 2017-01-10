import {Component} from 'react';
import Events from './Events';

export default class CommonAxis extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: false
    };
  }

  showEvents() {
    this.setState({
      events: true
    });
  }

  hiddenEvents() {
    this.setState({
      events: false
    });
  }

  render() {
    return (
      <div className='col-md-1 col-xs-1 no-padding'>
        <div className='time-line'>
          <div className='circle-year' onMouseEnter={this.showEvents.bind(this)}
               onMouseLeave={this.hiddenEvents.bind(this)}>
            <span className='year'>{this.props.year}</span>
            <i className='fa fa-dot-circle-o circle'> </i>
          </div>
        </div>
        <div className={this.state.events ? '' : 'hidden'}>
          <Events/>
        </div>
      </div>
    );
  }
}



