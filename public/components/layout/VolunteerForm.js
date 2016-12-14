import {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../../style/modal.css';

export default class VolunteerForm extends Component {

  cancelButton() {
    this.props.showVolunteerForm();
  }

  confirmButton() {
    this.props.showVolunteerForm();
  }

  close(){
    this.props.showVolunteerForm();
  }

  render() {
    return (
      <div>

        <div className='static-modal'>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>
                <div className="row">
                  <div className="col-xs-5 col-xs-offset-1">
                    VOLUNTEERS APPLICATION FORM
                  </div>
                  <div className="col-xs-offset-5 col-xs-1">
                    <img src="./public/images/home/close.png" onClick={this.close.bind(this)}/>
                  </div>
                </div>
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div className="row info">
                <div className=" col-xs-2 info-right">
                  <span> FistName<span className="pink">*</span></span>
                </div>
                <div className="col-xs-3">
                  <input type="text"/>
                </div>

                <div className=" col-xs-3 info-right">
                  <span> LastName<span className="pink">*</span></span>
                </div>
                <div className="col-xs-3">
                  <input type="text"/>
                </div>
              </div>


              <div className="row info">
                <div className=" col-xs-2 info-right">
                  <span> Age<span className="pink">*</span></span>
                </div>
                <div className="col-xs-3">
                  <input type="text"/>
                </div>

                <div className=" col-xs-3 info-right">
                  <span>TelephoneNumber<span className="pink">*</span></span>
                </div>
                <div className="col-xs-3">
                  <input type="text"/>
                </div>
              </div>


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
