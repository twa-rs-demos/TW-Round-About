import {Component} from 'react';
import Events from './Events';
import Dates from './Dates';
import Pagination from '../Pagination';

export default class EventAndDate extends Component {
  getEventDateRow(datas) {
    return datas.map((item, index) => {
      return (
        <div className='row row-margin-bottom' key={index}>
          <div className='col-md-9 col-xs-12'>
            <Events data={item.event}/>
          </div>
          <div className='col-md-3 col-xs-12 no-display'>
            <Dates data={item.dates}/>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.getEventDateRow(this.props.datas)}
        <Pagination totalPage='3'/>
      </div>
    );
  }
}

