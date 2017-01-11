import {Component} from 'react';
import Filter from './Filter';

export default class SearchBox extends Component {
  render() {
    return (
      <div className='search-box row'>
        <div className='col-sm-offset-4 col-xs-offset-3 col-sm-4 col-xs-6 no-padding search-box-container'>
          <input type='text'/>
          <button>
            <img src='http://localhost/tw-ra/public/images/home/icon_search_small_focused.png' alt=''/>
          </button>
        </div>
        <div className='col-sm-offset-4 col-xs-offset-3 col-sm-4 col-xs-6 no-padding search-type'>
          <button data-toggle='modal' data-target='#filter'>高级搜索 ></button>
        </div>
        <Filter/>
      </div>
    );
  }
}
