import React, {Component} from 'react';
import Paypal from './Paypal';

export default class ColTwo extends Component {
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
      <div>
        <h3 className="text-center">捐款</h3>
        <div className="row row-1">
          <div className="col-xs-6">
            <img src="./public/images/donate/wechat01.png" className="no-border no-hover img-center"/>
            <span className="span">Wechat</span>
          </div>
          <div className="col-xs-6">
            <a
              href="http://www.ccafc.org.cn/templates/Donation/txxx.aspx?nodeid=5&projectid=3299&strname=&jiner=&notes_email="
              target="_blank">
              <img src="./public/images/donate/logo_ccafc.png" className="img-center"/>
            </a>
            <span className="span">CCAFC</span>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <a href = "http://love.alipay.com/donate/itemDetail.htm?name=2015081315541167376" target="_blank">
              <img src="./public/images/donate/logo_alipay.png" className="no-border img-center"/>
            </a>
            <span className="span">Alipay</span>
          </div>
          <div className="col-xs-6">
            <img src="./public/images/donate/logo_paypal.png" onClick={this.showPaypalModal.bind(this)} className="img-center"/>
            <span className="span">Paypal</span>
          </div>
          {this.state.isShowPaypal ? <Paypal closePaypalModal={this.closePaypalModal.bind(this)}/> : ''}
        </div>
      </div>
    )
  }
}
