import {Component} from 'react';
import PictureMax from './PictureMax';
import OurWorkItems from './OurWorkItems';
import Video from '../home/Video';
import '../../style/home.less';

export default class Home extends Component {
  render() {
    return (
      <div id='home'>
        <PictureMax/>
        <Video/>
        <OurWorkItems/>
      </div>
    );
  }
}

