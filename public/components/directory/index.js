import {Component} from 'react';
import AdvancedSearch from './AdvancedSearch';
import CharitiesList from './CharitiesList';

export default class Directory extends Component {
  render() {
    return (<div>
        <div className="row">
          <div className="col-sm-offset-2 col-sm-8 no-padding">
            <AdvancedSearch/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-offset-2 col-sm-8 no-padding">
            <AdvancedSearch/>
          </div>
        </div>
      </div>
    );
  }
}
