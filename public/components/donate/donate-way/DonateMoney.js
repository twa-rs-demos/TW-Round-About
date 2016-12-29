import {Component} from 'react';
import Paypal from './Paypal';

export default class DonateMoney extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowPaypal: false
    };
  }

  showPaypalModal() {
    this.setState({isShowPaypal: true});
  }

  closePaypalModal() {
    this.setState({isShowPaypal: false});
  }

  render() {
    return (
      <div id='donatemoney' className='donate'>
        <h3 className='text-center'>捐款</h3>
        <div className='row donate-money-margin'>

          <div className='col-xs-offset-1 col-xs-5'>
            <img src='http://localhost/tw-ra/public/images/donate/wechat01.png'
                 className='img-center'/>
            <span className='span'>Wechat</span>
          </div>
          <div className='col-xs-5'>
            <a
              href='http://www.ccafc.org.cn/templates/Donation/txxx.aspx?nodeid=5&projectid=3299&strname=&jiner=&notes_email='
              target='_blank'>
              <div className='image-border'>
                <img src='http://localhost/tw-ra/public/images/donate/logo_ccafc.png'
                     className='img-center'/>
              </div>
            </a>
            <span className='span'>CCAFC</span>
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-offset-1 col-xs-5'>
            <a href='http://love.alipay.com/donate/itemDetail.htm?name=2015081315541167376' target='_blank'>
              <img src='http://localhost/tw-ra/public/images/donate/logo_alipay.png'
                   className='img-center'/>
            </a>
            <span className='span'>Alipay</span>
          </div>
          <div className='col-xs-5'>
            <div className='image-border'>
              <img src='http://localhost/tw-ra/public/images/donate/logo_paypal.png'
                   onClick={this.showPaypalModal.bind(this)}
                   className='img-center'/>
            </div>
            <span className='span'>Paypal</span>
          </div>
          {this.state.isShowPaypal ? <Paypal closePaypalModal={this.closePaypalModal.bind(this)}/> : ''}
        </div>
      </div>
    );
  }
}
