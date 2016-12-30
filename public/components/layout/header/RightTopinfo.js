import {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {Link} from 'react-router';

class WechatModal extends Component {
  render() {
    return (
      <div className='static-modal' id='wechatModal'>
        <Modal.Dialog>
          <Modal.Header>
            <Button onClick={this.props.closeWechatModal}><img
              src='http://localhost/tw-ra/public/images/home/close.png'/></Button>
          </Modal.Header>

          <Modal.Body>
            <img src='http://localhost/tw-ra/public/images/home/wechat store.png'/>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }
}

export default class MainMenu extends Component {
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
      <div className='right-topinfo'>
        <Link to={URI_PREFIX + '/newsandevent/newslettercenter'}
              className='top-right-word  no-padding'>月报中心</Link>
        <a href='#apply-monthly-report' className='top-right-word no-padding'>月报申领</a>
        <a href='#' className='no-padding top-right-word'>English</a>

        <a className='no-padding top-left-icon ' onClick={this.showWechatModal.bind(this)}>
          <img src='http://localhost/tw-ra/public/images/icon_wechat.png'/>
        </a>

        <a href='http://weibo.com/Rooundabout666?sudaref=www.so.com&is_all=1'
           className='no-padding top-left-icon' target='_blank'>
          <img src='http://localhost/tw-ra/public/images/icon_weibo.png'/>
        </a>

        <a href='https://shop125100050.taobao.com/index.htm?spm=2013.1.w5002-12973215066.2.AXTtj4'
           className='no-padding  top-left-icon ' target='_blank'>
          <img src='http://localhost/tw-ra/public/images/icon_taobao.png' alt=''/>
        </a>

        {this.state.isShowWechat ? <WechatModal closeWechatModal={this.closeWechatModal.bind(this)}/> : ''}
      </div>
    );
  }
}
