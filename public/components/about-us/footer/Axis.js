import {Component} from 'react';
import CommonAxis from './CommonAxis';
import yearsDate from './timeAndEventDate';

export default class Axis extends Component {

  render() {

    const axis = yearsDate.map((year, index)=> {
      return (
        <div key={index}>
          <CommonAxis year={year.year} firstEvent={year.firstEvent} firstEventTime={year.firstEventTime}
                      secondEvent={year.secondEvent} secondEventTime={year.secondEventTime}/>
        </div>)
    });

    return (
      <div className='container aboutUs-container'>
        <div className='row'>
          <div className='col-md-offset-1 col-md-1  col-xs-offset-1 col-xs-1 no-padding-right'>
            <div className='time-line'></div>
          </div>
          {axis}
          <div className='col-md-1 col-xs-1 no-padding'>
            <i className='fa fa-caret-right circle chevron'> </i>
          </div>
        </div>
      </div>
    );
  }
}
