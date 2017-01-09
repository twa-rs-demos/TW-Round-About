import {Component} from 'react';
import OurWorkItems from './OurWorkItems';
import Video from '../home/Video';
import {MaxPicture} from '../common/';
import '../../style/home.less';

export default class Home extends Component {
  render() {
    const pictureSrc = './public/images/home/hero_index.png';
    return (
      <div id='home' className='container-fluid no-padding'>
        <MaxPicture src={pictureSrc}>
          <h2 className='home-text'>我们愿意把爱分享给每个需要帮助的孩子。</h2>
        </MaxPicture>
        <Video/>
        <OurWorkItems/>
      </div>
    );
  }
}

