import {Component} from 'react';
import OurWorkItems from './OurWorkItems';
import Video from '../home/Video';
import {MaxPicture} from '../common/';
import images from './images';

export default class Home extends Component {
  render() {
    return (
      <div id='home' className='container-fluid no-padding'>
        <MaxPicture src={images.hero_index}>
          <h2 className='home-text'>我们愿意把爱分享给每个需要帮助的孩子</h2>
        </MaxPicture>
        <Video/>
        <OurWorkItems/>
      </div>
    );
  }
}

