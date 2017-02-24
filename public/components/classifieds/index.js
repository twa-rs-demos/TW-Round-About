import {Component} from 'react';
import PublicResource from './PublicResource';
import AdvancedSearch from '../common/AdvancedSearch';
import ProvideAndQuestion from './ProvideAndQuestion';

export default class Classifieds extends Component {
  render() {
    return (
      <div className='row' id='class-fields'>
        <div className='col-sm-offset-2 col-sm-8 no-padding'>
          <PublicResource/>
          <AdvancedSearch/>
          <ProvideAndQuestion/>
        </div>
      </div>
    );
  }
}
