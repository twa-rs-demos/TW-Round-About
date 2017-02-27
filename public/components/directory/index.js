import {Component} from 'react';
import SearchBox from './SearchBox';
import CharitiesList from './CharitiesList';

export default class Directory extends Component {
  render() {
    return (<div id='directory'>
        <div className='row'>
          <div className='col-sm-offset-2 col-sm-8 no-padding advanced-search'>
            <SearchBox/>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-offset-2 col-sm-8 no-padding charities-list'>
            <CharitiesList/>
          </div>
        </div>
      </div>
    );
  }
}
