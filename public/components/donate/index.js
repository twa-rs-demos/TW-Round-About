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
        <div className='container row'>
          <div className="col-xs-offset-1 col-xs-10">
            <DonateWay/>
            <ItemDonate/>
            <DonatingProjects/>
            <p>
              <span>这里还需要一个翻页器组件</span>
              <Link to='/tw-ra/donateCurrent'><span>更多</span></Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
