import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

class Alipay extends Component{
  render() {
    return (
      <div className="static-modal" id="wechatModal">
        <Modal.Dialog>
          <Modal.Header>
            <Button onClick={this.props.closeAlipayModal}><img src="./public/images/home/close.png"/></Button>
          </Modal.Header>

          <Modal.Body>
            <img src="./public/images/home/wechat store.png"/>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    )
  }
}

export default class ColTwo extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isShowAlipay: false
    };
  }

  showAlipayModal() {
    this.setState({isShowAlipay: true});
  }

  closeAlipayModal() {
    this.setState({isShowAlipay: false},()=>{
    });
  }

  render(){
    return (
      <div>
        <h3>捐款</h3>
        <div className="row row-1">
          <div className="col-xs-6">
            <img src="./public/images/donate/wechat01.png" className="no-border no-hover"/>
            <span className="span">Wechat</span>
          </div>
          <div className="col-xs-6">
            <a
              href="http://www.ccafc.org.cn/templates/Donation/txxx.aspx?nodeid=5&projectid=3299&strname=&jiner=&notes_email="
              target="_blank">
              <img src="./public/images/donate/logo_ccafc.png"/>
            </a>
            <span className="span">CCAFC</span>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <img src="./public/images/donate/logo_alipay.png" className="no-border" onClick={this.showAlipayModal.bind(this)}/>
            <span className="span">Alipay</span>
          </div>
          {this.state.isShowAlipay ? <Alipay closeAlipayModal={this.closeAlipayModal.bind(this)}/> : ''}
          <div className="col-xs-6">
            <img src="./public/images/donate/logo_paypal.png"/>
            <span className="span">Paypal</span>
          </div>
        </div>
      </div>
    )
  }
}
