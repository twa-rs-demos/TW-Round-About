import {Component} from 'react';
import images from '../images';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: '搜索本站'
    };
  }

  clearPlaceholder() {
    this.setState({placeholder: ''});
  }

  setPlaceholder() {
    this.setState({placeholder: '搜索本站'});
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.submitSearch();
    }
  }

  submitSearch() {
    this.input.value = '';
    location.pathname = '/tw-ra/searchResult';
  }

  render() {
    return (
      <div className='search'>
        <input type='text' placeholder={this.state.placeholder} onFocus={this.clearPlaceholder.bind(this)}
               onBlur={this.setPlaceholder.bind(this)} onKeyDown={this.handleKeyDown.bind(this)}
               ref={(ref) => {
                 this.input = ref;
               }}/>
        <button onClick={this.submitSearch.bind(this)}>
          <img src={images.search} alt='search'/>
        </button>
      </div>
    );
  }
}
