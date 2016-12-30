import {Component} from 'react';
import Logo from './Logo';
import RightTopInfo from './RightTopinfo';
export default class TopInfo extends Component {
  render() {
    return (
      <div className='row no-margin'>
        <div className='col-sm-6 col-xs-3'>
          <Logo/>
        </div>
        <div className='col-sm-6 col-xs-9 text-right no-padding'>
          <RightTopInfo/>
        </div>
      </div>
    );
  }
}
