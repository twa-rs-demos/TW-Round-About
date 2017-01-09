import {Component} from 'react';

export default class PhysicalStore extends Component {
  render() {
    return (<div>
      <h2 className='physical-store-title text-center'>实体商店</h2>
      <div className='col-sm-offset-1 col-sm-10 store-info'>
        We have a retail store & warehouse for sorting & storing stock
        (totalling 2000m2) which is open daily from 9:30am -5:30pm(except Sunday).
      </div>
      <div>
        <div className='col-sm-7 round-about-place'>
          <img src='http://localhost/tw-ra/public/images/store/donate2.png' alt=''/>
        </div>
        <div className='col-sm-5 round-about no-padding'>
          <div className='round-about-store'>
            <p className='title'>Roundabout</p>
            <p>Yuyang Road West, Adjacent to Yosemite Villas, Houshayu Town, Shunyi District, Beijing. 101302</p>
            <p>Use Baidu or Gaode Map with keyword #roundabout# will direct you to the Store.</p>
          </div>
          <div className='store-position'>
            <img src='http://localhost/tw-ra/public/images/store/position.png' alt=''/>
          </div>
        </div>
      </div>
    </div>);
  }
}
