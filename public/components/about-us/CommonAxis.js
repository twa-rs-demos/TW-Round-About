import {Component} from 'react';

export default class CommonAxis extends Component {
  showEvents(){
    this.props.everyYearEvents();
  }

  render() {
    return (
      <div className='col-md-1 col-xs-1 no-padding'>
        <div className='time-line'>
          <div className='circle-year' onMouseOver={this.showEvents.bind(this)}>
            <span className='year'>{this.props.year}</span>
            <i className='fa fa-circle circle'> </i>
          </div>
        </div>
      </div>
    );
  }
}
