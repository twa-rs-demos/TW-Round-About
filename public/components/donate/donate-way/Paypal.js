import {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import images from '../images';

export default class Alipay extends Component {
  render() {
    return (
      <div className='donate-way-elastic'>
        <Modal.Dialog>
          <Modal.Header>
            <Button onClick={this.props.closePaypalModal}><img src={images.close}/></Button>
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
