import {Component} from 'react';
import ourLeadersData from './ourLeadersData';

export default class OurLeaderShip extends Component {

  render() {

    const ourLeaders = ourLeadersData.map((leader, index)=> {
      return (
        <div className='col-md-6 col-xs-12 leader'>
          <img className='center-block' src={leader.src}/>
          <div className='leader-picture'>
            <p>{leader.name}</p>
            <p>{leader.introduce}</p>
          </div>
        </div>
      )
    });

    return (
      <div id='ourLeaderShip' className='col-md-offset-3 col-md-6 col-xs-offset-3 col-xs-6'>

        <h3 className='middle-title title-h3'>我们的领导</h3>
        <div className='row'>
          {ourLeaders}
        </div>
      </div>
    );
  }
}
