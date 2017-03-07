import {Component} from 'react';
import images from './images';

export default class PhysicalStore extends Component {
  render() {
    return (<div>
      <h2 className='physical-store-title text-center round-store-title'>实体商店</h2>
      <div className='col-sm-offset-1 col-sm-10 store-info'>
        We have a retail store & warehouse for sorting & storing stock
        (totalling 2000m2) which is open daily from 9:30am -5:30pm(except Sunday).
      </div>
      <div>
        <div className='col-sm-7 round-about-place'>
          <img src={images.donate2} alt=''/>
        </div>
        <div className='col-sm-5 round-about no-padding'>
          <div className='round-about-store'>
            <p className='title no-margin'>Roundabout</p>
            <p className='no-margin'>
              Yuyang Road West, Adjacent to Yosemite Villas, Houshayu Town, Shunyi District,Beijing. 101302</p>
            <p className='no-margin'>Use Baidu or Gaode Map with keyword #roundabout# will direct you to the Store.</p>
          </div>
          <div className='store-position'>
            <img src={images.position} alt=''/>
          </div>
        </div>
      </div>
    </div>);
  }
}
