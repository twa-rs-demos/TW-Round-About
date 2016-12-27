import {Component} from 'react';
import {DonatingProjects} from '../common/index';
import PictureMax from './PictureMax';
import DonateWay from './donate-way/index';
import ItemDonate from './ItemDonate';
import '../../style/donate.less';
import '../../style/modalForm.less';
import {Link} from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div id='donate-page-index'>
        <PictureMax/>
        <DonateWay/>
        <ItemDonate/>
        <DonatingProjects/>
        <p>
          <span>这里还需要一个翻页器组件</span>
          <Link to='/tw-ra/donateCurrent'><span>更多</span></Link>
        </p>
      </div>
    );
  }
}
