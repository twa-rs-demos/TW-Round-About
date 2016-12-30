import {Component} from 'react';
import DonateGoods from './DonateGoods';
import DonateMoney from './DonateMoney';
import DonationProjects from './DonationProjects';

export default class DonateWay extends Component {
  render() {
    return (
      <div id='donate-way'>
        <div className="donate-way-title">
          <h2 className='middle-title'>
            捐款方式
          </h2>
        </div>
        <div className='row'>
          <div className="col-sm-offset-1 col-sm-10">
            <div className='row'>
              <div className='col-sm-4 col-xs-12'>
                <DonateGoods/>
              </div>
              <div className='col-sm-4 col-xs-12'>
                <DonateMoney/>
              </div>
              <div className='col-sm-4 col-xs-12'>
                <DonationProjects/>
              </div>
            </div>
            <div className='row donate-way-text'>
              We offer assistance by either directly passing on the items you have donated or by selling them in
              ourretail store to raise funds. Store proceeds pay for medical costs for orphans and others less
              fortunate,sheltered housing for the elderly, warm blankets, food and other basic needs items for
              distribution.
            </div>


          </div>
        </div>


      </div>
    );
  }
}
