import {Component} from 'react';

export default class ShoppingForChildren extends Component {
  render() {
    return (<div>
      <h2 className='shopping-title text-center'>通过购物来改变孩子的<span>命运</span></h2>
      <p className='text-center'>所得利润用于支持和帮助困境群体。</p>
      <div className='col-xs-6 two-dimension-code no-padding'>
        <div className='col-xs-6 inline text-right no-padding relative-positon'>
          <img src='http://localhost/tw-ra/public/images/wechat01.png' alt=''/>
          <span className='store-name'>微信商城</span>
        </div>
        <div className='col-xs-6 inline text-right no-padding relative-positon'>
          <img src='http://localhost/tw-ra/public/images/taobao01.png' alt=''/>
          <span className='store-name'>淘宝商城</span>
        </div>
      </div>
      <div className='col-xs-6 donate-button'>
        <div className='col-xs-10 text-right'>
          <button>捐款</button>
          <button>捐物</button>
          <div>... Or if you’re in the giving mood</div>
        </div>
      </div>
    </div>);
  }
}
