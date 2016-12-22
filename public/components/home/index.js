import {Component} from 'react';
import PictureMax from './PictureMax';
import OurWorkItems from './OurWorkItems';
import Video from '../home/Video';
import '../../style/index.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <PictureMax/>
        <Video/>
        <OurWorkItems/>
      </div>
    );
  }
}

