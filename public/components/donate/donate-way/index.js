import {Component} from 'react';
import DonateGoods from './DonateGoods';
import DonateMoney from './DonateMoney';
import DonationProjects from './DonationProjects';

export default class DonateWay extends Component {
  render() {
    return (
      <div id='donate-way'>
        <h2 className='donate-way-title'>
          捐款方式
        </h2>
        <div className='row'>

          <div className='col-xs-offset-1 col-xs-3'>
            <DonateGoods/>
          </div>
          <div className='col-xs-3'>
            <DonateMoney/>
          </div>
          <div className=' col-xs-3'>
            <DonationProjects/>
          </div>
        </div>
        <div className='row donate-way-text'>
          <div className='col-xs-offset-1 col-xs-9'>
            We offer assistance by either directly passing on the items you have donated or by selling them in
            ourretail store to raise funds. Store proceeds pay for medical costs for orphans and others less
            fortunate,sheltered housing for the elderly, warm blankets, food and other basic needs items for
            distribution.
          </div>
        </div>

      </div>
    );
  }
}
