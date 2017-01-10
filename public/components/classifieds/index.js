import {Component} from 'react';
import PublicResource from './PublicResource';
import '../../style/classfields.less';

export default class Classifieds extends Component {
  render() {
    return (<div className='row' id='class-fields'>
      <PublicResource/>
    </div>);
  }
}
