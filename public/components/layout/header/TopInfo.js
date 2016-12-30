import {Component} from 'react';
import Logo from './Logo';
import RightTopInfo from './RightTopinfo';
export default class TopInfo extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-xs-6'>
          <Logo/>
        </div>
        <div className='col-xs-6'>
          <RightTopInfo/>
        </div>
      </div>
    );
  }
}
