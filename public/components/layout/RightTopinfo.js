import React, {Component} from 'react';
import {Modal,Button} from 'react-bootstrap';

class WechatModal extends Component {
  render() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
            <Button>X</Button>
          </Modal.Header>

          <Modal.Body>
            One fine body...
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

  showWechat() {
    this.setState({isShowWechat: true});
  }

  render() {
    return (
      <div className="items col-md-3 row top-right-items no-padding">
        <a href="#" className="col-sm-2 no-padding">月报中心</a>
        <a href="#" className="col-sm-2 no-padding">月报申领</a>
        <a href="#" className="col-sm-2 no-padding">English</a>
        <a className="col-sm-1 no-padding" onClick={this.showWechat.bind(this)}>
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
        {this.state.isShowWechat ? <WechatModal/> : ''}
        {/*<WechatModal/>*/}
      </div>
    );
  }
}
