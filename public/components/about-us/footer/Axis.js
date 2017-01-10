import {Component} from 'react';
import CommonAxis from './CommonAxis';

export default class Axis extends Component {

  render() {
    const years = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'];

    const axis = years.map((year, index)=> {
      return (
        <div key={index}>
          <CommonAxis year={year}/>
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
