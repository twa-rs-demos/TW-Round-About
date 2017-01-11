import React, {Component} from 'react';
import {chunk} from 'lodash/chunk';

export default class Dates extends Component {

  getDate(dates) {
    let date = _.chunk(dates, 2);
    return date.map((itemArray)=> {
      return (
        <div className="row date-block">
          {this.getBlockDate(itemArray)}
        </div>
      );
    });
  }
  getBlockDate(itemArray){
    return (
      itemArray.map((item)=> {
        return (
          <div className="col-md-12">
            <div className="row margin-bottom">
              <div className="col-md-3 no-padding box-border">
                <div className="num-box">13</div>
              </div>
              <div className='col-md-9 no-padding padding-left'>
                <h4>Fri, 13 March<br />
                  10:00am-14:00pm</h4>
              </div>
            </div>
          </div>
        );
      })
    )
  }

  render() {
    const dates = [
      {num: '13', date: 'Fri, 13 March', time: '10:00am-14:00pm'},
      {num: '13', date: 'Fri, 13 March', time: '10:00am-14:00pm'},
      {num: '13', date: 'Fri, 13 March', time: '10:00am-14:00pm'},
      {num: '13', date: 'Fri, 13 March', time: '10:00am-14:00pm'},
      {num: '13', date: 'Fri, 13 March', time: '10:00am-14:00pm'},
      {num: '13', date: 'Fri, 13 March', time: '10:00am-14:00pm'},
      {num: '13', date: 'Fri, 13 March', time: '10:00am-14:00pm'},
      {num: '13', date: 'Fri, 13 March', time: '10:00am-14:00pm'}
    ];
    return (
      <div id='date-list'>
        {this.getDate(dates)}
      </div>
    );
  }
}
