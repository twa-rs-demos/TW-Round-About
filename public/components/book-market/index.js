import {Component} from 'react';
import BookTakeChange from './BookTakeChange';
import BookMarketNotice from './BookMarketNotice';
import BookMarketReview from './BookMarketReview';

export default class BookMarket extends Component {

  render() {
    return (
      <div id="book-market">
        <BookTakeChange/>
        <BookMarketNotice/>
        <BookMarketReview/>
      </div>
    );
  }
}
