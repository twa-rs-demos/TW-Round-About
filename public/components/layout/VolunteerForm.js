import {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class VolunteerForm extends Component {

  cancelButton(){
    this.props.showVolunteerForm();
  }
  confirmButton(){
    this.props.showVolunteerForm();
  }

  render() {
    return (
      <div>

          <div className='static-modal'>
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>删除提示</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                您确定要删除吗？
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={this.cancelButton.bind(this)}>取消</Button>
                <Button bsStyle='primary' onClick={this.confirmButton.bind(this)}>确定</Button>
              </Modal.Footer>

            </Modal.Dialog>
          </div>
        </div>
     
    );
  }
}
