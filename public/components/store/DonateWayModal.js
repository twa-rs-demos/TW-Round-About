import {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

class DonateWay extends Component {
  render() {
    return <div className="row">
      <div className="col-xs-offset-1 col-xs-10 no-padding">
        <div className="col-xs-6 donate-way no-padding">
          <div className="text-center">
            <img src='http://localhost/tw-ra/public/images/donate/wechat01.png'
                 className='donate-img'/>
            <div className='span'>Wechat</div>
          </div>
        </div>
        <div className="col-xs-6 donate-way no-padding">
          <div className="text-center">
            <a
              href='http://www.ccafc.org.cn/templates/Donation/txxx.aspx?nodeid=5&projectid=3299&strname=&jiner=&notes_email='
              target='_blank'>
              <img src='http://localhost/tw-ra/public/images/donate/logo_ccafc.png'
                   className='donate-img border'/>
            </a>
            <div className='span'>CCAFC</div>
          </div>
        </div>
        <div className="col-xs-6 donate-way no-padding">
          <div className="text-center">
            <a href='http://love.alipay.com/donate/itemDetail.htm?name=2015081315541167376' target='_blank'>
              <img src='http://localhost/tw-ra/public/images/donate/logo_alipay.png'
                   className='donate-img'/>
            </a>
            <div className='span'>Alipay</div>
          </div>
        </div>
        <div className="col-xs-6 donate-way no-padding">
          <div className="text-center">
            <img src='http://localhost/tw-ra/public/images/donate/logo_paypal.png'
                 className='donate-img border'/>
            <div className='span'>Paypal</div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default class DonateWayModal extends Component {
  hideModal() {
    this.props.hideModal();
  }

  render() {
    return (<div id="donate-way-modal">
      <Modal.Dialog>
        <Modal.Header>
          <div className="text-right">
            <Button className="close-modal no-padding" onClick={this.hideModal.bind(this)}>X</Button>
          </div>
          <Modal.Title>
            <div className="text-center">
              <span className="title">Monetary Donation</span>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <DonateWay/>
        </Modal.Body>
      </Modal.Dialog>
    </div>);
  }
}
