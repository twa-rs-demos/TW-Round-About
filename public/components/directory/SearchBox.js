import React, {Component} from 'react';
import AdvancedSearch from '../common/AdvancedSearch';

export default class SearchBox extends Component {
  render() {
    return (<div>
      <h2 className="middle-title">慈善机构名册</h2>
      <div className="text-center description">
        We work with or have come in confect with lots of other great ...
      </div>
      <AdvancedSearch/>
    </div>);
  }
}
