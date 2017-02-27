import {Component} from 'react';
import Carousel from './Carousel';

export default class BookTakeChange extends Component {
  render() {
    return (
      <div className="book-take-change">
        <div className="book-change-top">
          <h2 className="middle-title">一本书带来的改变</h2>
          <p className="middle-describe">每个月我们都会在选定的国际学校举办大、小型书市（学校假期除外）。</p>
        </div>
        <div className="row">
          <div className="col-md-offset-2 col-md-8 col-xs-10 col-xs-offset-1">
            <Carousel/>
          </div>
        </div>
      </div>
    );
  }
}
