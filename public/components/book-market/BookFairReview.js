import {Component} from 'react';
import bookFairNewsData from './bookFairNewsData'
import BookFairNews from './BookFairNews';

export default class BookMarketReview extends Component {
  render() {
    return (
      <div className='bookfair-review'>
        <div>
          <h2 className='middle-title'>往届书市回顾</h2>
        </div>
        <div className='row'>
          <div className='col-md-offset-1 col-md-10 col-xs-12'>
            <BookFairNews data={bookFairNewsData}/>
          </div>
        </div>
      </div>
    );
  }
}
