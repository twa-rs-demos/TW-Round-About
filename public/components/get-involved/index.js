import {Component} from 'react';
import PictureMax from './PictureMax';
import StaticContent from './StaticContent';
import '../../style/getInvolved.less';

export default class getInvolved extends Component {
  render() {
    return (
      <div id="get-involved">
        <PictureMax/>
        <StaticContent/>
      </div>
    );
  }
}
