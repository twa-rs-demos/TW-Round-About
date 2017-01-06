import {Component} from 'react';
import {DonatingProjects, MaxPicture} from '../common/index';
import DonateWay from './donate-way/index';
import ItemDonate from './ItemDonate';
import '../../style/donate.less';
import '../../style/modalForm.less';
import {Link} from 'react-router';

export default class Home extends Component {
  render() {
    const pictureSrc = 'http://localhost/tw-ra/public/images/donate/hero_donate.png';
    return (
      <div id='donate-page-index'>
        <MaxPicture src={pictureSrc}>
          <div className='donate-img-text'>
            <h2>“施比受更为有福。”</h2>
            <h3>—— St Francis of Assisi</h3>
          </div>
        </MaxPicture>
        <div className='container'>
            <DonateWay/>
            <ItemDonate/>
            <DonatingProjects title='正在捐款的项目'/>
        </div>
      </div>
    );
  }
}
