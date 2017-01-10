import {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../../style/modalForm.less';

export default class DonateRules extends Component {
  render() {
    return (
      <div id='donate-things-rules'>
            <Modal.Dialog>
              <Modal.Header>
                <Button onClick={this.props.closeElasticBox}><img className='close-btn'
                                                                  src='./public/images/home/close.png'/></Button>
                <h2>我们不接受的物品</h2>
              </Modal.Header>

              <Modal.Body>
                <ul>
                  <li>Open, prescription and out of date medicines.</li>
                  <li>Used underwear, including socks.</li>
                  <li>Anything previously used by an animal – such as a dog’s bed</li>
                  <li>Copies of magazines over 6 months old.</li>
                  <li>Computers, monitors and printers over 4 years old.</li>
                </ul>
              </Modal.Body>
            </Modal.Dialog>
      </div>
    );
  }
}
