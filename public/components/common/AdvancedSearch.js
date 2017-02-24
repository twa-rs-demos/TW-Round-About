import {Component} from 'react';
import Filter from '../classifieds/Filter';

export default class AdvancedSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowFilter: false
    };
  }

  showFilter() {
    this.setState({isShowFilter: true});
  }

  hideFilter() {
    this.setState({isShowFilter: false});
  }

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
          <button onClick={this.showFilter.bind(this)}>高级搜索 ></button>
        </div>
        {this.state.isShowFilter ? <Filter hideFilter={this.hideFilter.bind(this)}/> : ''}
      </div>
    );
  }
}
