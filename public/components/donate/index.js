import {Component} from 'react';
import {DonatingProjects, MaxPicture} from '../common/index';
import DonateWay from './donate-way/index';
import ItemDonate from './ItemDonate';
import images from './images';

export default class Home extends Component {
  render() {

    return (
      <div id='donate-page-index'>
        <MaxPicture src={images.heroDonate}>
          <div className='donate-img-text'>
            <h2>“施比受更为有福。”</h2>
            <h3>—— St Francis of Assisi</h3>
          </div>
        </MaxPicture>
        <div className='container'>
            <DonateWay/>
            <ItemDonate/>
            <DonatingProjects title='正在捐款的项目' paginationMoreLink="/tw-ra/donate/donatecurrent"/>
        </div>
      </div>
    );
  }
}
