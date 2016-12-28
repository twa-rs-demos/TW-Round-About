import {Component} from 'react';
import {MaxPicture} from '../common/index';
import StaticContent from './StaticContent';
import '../../style/getInvolved.less';

export default class getInvolved extends Component {
  render() {
    const pictureSrc = 'http://localhost/tw-ra/public/images/getInvolved/hero_getInvolved.png';
    return (
      <div id='get-involved'>
        <MaxPicture src={pictureSrc}/>
        <StaticContent/>
      </div>
    );
  }
}
