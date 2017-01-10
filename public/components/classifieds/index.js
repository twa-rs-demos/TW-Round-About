import {Component} from 'react';
import PublicResource from './PublicResource';

export default class Classifieds extends Component {
  render() {
    return (<div className='row' id='class-fields'>
      <PublicResource/>
    </div>);
  }
}
