import {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class Alipay extends Component {
  render() {
    return (
      <div className='donate-way-elastic'>
        <Modal.Dialog>
          <Modal.Header>
            <Button onClick={this.props.closePaypalModal}><img src='./public/images/home/close.png'/></Button>
          </Modal.Header>

          <Modal.Body>
            <h4>Paypal捐款账号：</h4>
            <p>paypal@ccafc.org.cn</p>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }
}
