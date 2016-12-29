import {Component} from 'react';
import DonateGoods from './DonateGoods';
import DonateMoney from './DonateMoney';
import DonationProjects from './DonationProjects';

export default class DonateWay extends Component {
  render() {
    return (
      <div>
        <div className='donate-way'>
          <h2 className='donate-way-title'>
            捐款方式
          </h2>
          <div >
            <div className='row'>
              <div className='col-xs-4'>
                <DonateGoods/>
              </div>
              <div className=' col-xs-4 '>
                <DonateMoney/>
              </div>
              <div className='col-xs-4'>
                <DonationProjects/>
              </div>
            </div>
          </div>
          <div className='donate-way-text'>
            <p>We offer assistance by either directly passing on the items you have donated or by selling them in
              our
              retail store to raise funds. Store proceeds pay for medical costs for orphans and others less
              fortunate,
              sheltered housing for the elderly, warm blankets, food and other basic needs items for distribution.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
