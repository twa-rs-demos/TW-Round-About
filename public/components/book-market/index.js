import {Component} from 'react';
import BookTakeChange from './BookTakeChange';
import BookFairsNotice from './BookFairNotice';
import BookFairsReview from './BookFairReview';

export default class BookFairs extends Component {

  render() {
    return (
      <div id="book-market">
        <BookTakeChange/>
        <BookFairsNotice/>
        <BookFairsReview/>
      </div>
    );
  }
}
