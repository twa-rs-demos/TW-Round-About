import {Component} from 'react';
import Scrollchor from 'react-scrollchor';

export default class DonateGoods extends Component {
  render() {
    return (
      <div id='donatethings' className=' donate '>
        <h3>物品捐赠</h3>
        <ul className='col-xs-offset-3 col-xs-9'>
          <li >
            <Scrollchor className='donate-goods-item' to='#donate-guide-hash'> 捐赠指南</Scrollchor></li>
          <li>
            <Scrollchor className='donate-goods-item' to='#donate-guide-collect-hash'>捐赠物品代收点</Scrollchor></li>
          <li>
            <Scrollchor className='donate-goods-item' to='#donate-guide-apply-hash'>上门收取捐赠物品申请表</Scrollchor></li>
        </ul>
      </div>
    );
  }
}
