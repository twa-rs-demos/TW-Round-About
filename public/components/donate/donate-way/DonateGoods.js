import {Component} from 'react';
import Scrollchor from 'react-scrollchor';

export default class DonateGoods extends Component {
  render() {
    return (
      <div id="donatethings">
        <h3>物品捐赠</h3>
        <ul>
          <li><Scrollchor to='#donate-guide-hash'> 捐赠指南</Scrollchor></li>
          <li><Scrollchor to='#donate-guide-collect-hash'>捐赠物品代收点</Scrollchor></li>
          <li><Scrollchor to='#donate-guide-apply-hash'>上门收取捐赠物品申请表</Scrollchor></li>
        </ul>
      </div>
    );
  }
}
