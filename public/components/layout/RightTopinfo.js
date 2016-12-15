import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {Link} from 'react-router';

class WechatModal extends Component {
  render() {
    return (
      <div className="static-modal" id="wechatModal">
        <Modal.Dialog>
          <Modal.Header>
            <Button onClick={this.props.closeWechatModal}><img src="./public/images/home/close.png"/></Button>
          </Modal.Header>

          <Modal.Body>
            <img src="./public/images/home/wechat store.png"/>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    )
  }
}

export default  class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowWechat: false
    };
  }

  showWechatModal() {
    this.setState({isShowWechat: true});
  }

  closeWechatModal() {
    this.setState({isShowWechat: false});
  }

  render() {
    return (
      <div className="items col-md-3 row top-right-items no-padding">
        <Link to="/tw-ra/newsLetter-center" className="col-sm-2 no-padding">月报中心</Link>
        <Link to="/tw-ra/newsLetter-signUp" className="col-sm-2 no-padding">月报申领</Link>
        <a href="#" className="col-sm-2 no-padding">English</a>
        <a className="col-sm-1 no-padding wechat-icon" onClick={this.showWechatModal.bind(this)}>
          <img src="./public/images/icon_wechat.png"/>
        </a>
        <a href="http://weibo.com/Rooundabout666?sudaref=www.so.com&is_all=1"
           className="col-sm-1 no-padding" target="_blank">
          <img src="./public/images/icon_weibo.png"/>
        </a>
        <a href="https://shop125100050.taobao.com/index.htm?spm=2013.1.w5002-12973215066.2.AXTtj4"
           className="col-sm-1 no-padding" target="_blank">
          <img src="./public/images/icon_taobao.png" alt=""/>
        </a>
        {this.state.isShowWechat ? <WechatModal closeWechatModal={this.closeWechatModal.bind(this)}/> : ''}
      </div>
    );
  }
}
