import {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../../style/modalForm.css';

export default class VolunteerForm extends Component {

  cancelButton() {
    this.props.showForm();
  }

  confirmButton() {
    this.props.showForm();
  }

  close() {
    this.props.showForm();
  }

  render() {
    return (
      <div>

        <div className='static-modal'>
          <Modal.Dialog>
            <div className="modal-content  modal-Volunteer-content">
              <Modal.Header>
                <Modal.Title>
                  <div className="row">
                    <div className="col-xs-5 col-xs-offset-1">
                      <span className="title">{this.props.title}</span>
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
                    <input type="text" className="input-info" required="required"/>
                  </div>

                  <div className=" col-xs-3 info-right">
                    <span> LastName<span className="pink">*</span></span>
                  </div>
                  <div className="col-xs-3">
                    <input type="text" className="input-info" required="required"/>
                  </div>
                </div>

                <div className="row info">
                  <div className=" col-xs-2 info-right">
                    <span> Age<span className="pink">*</span></span>
                  </div>
                  <div className="col-xs-3">
                    <input type="text" className="input-info" required="required"/>
                  </div>

                  <div className=" col-xs-3 info-right">
                    <span>Telephone Number<span className="pink">*</span></span>
                  </div>
                  <div className="col-xs-3">
                    <input type="text" className="input-info" required="required"/>
                  </div>
                </div>

                <div className="row info">
                  <div className=" col-xs-2 info-right">
                    <span>{this.props.inputTextInfo}<span className="pink">*</span></span>
                  </div>
                  <div className="col-xs-3 ">
                    <input type="text" className="text-length input-info" required="required"/>
                  </div>
                </div>

                <div className="row info">
                  <div className=" col-xs-2 info-right">
                    <span>{this.props.textAreaInfo}<span className="pink">*</span></span>
                  </div>
                  <div className="col-xs-3 ">
                  <textarea cols="87" rows="10" className="textArea-volunteerForm" placeholder="5000 Characters Max"
                            maxLength="5000" required="required"/>
                  </div>
                </div>

              </Modal.Body>

              <Modal.Footer>
                <div className="row">
                  <div className="col-xs-offset-1 col-xs-1">
                    <Button className='btn-Cancel btn btn-default btn-sm'
                            onClick={this.cancelButton.bind(this)}>Cancel</Button>
                  </div>
                  <div className="col-xs-offset-1 col-xs-1">
                    <Button className="btn-Submit btn btn-default btn-sm"
                            onClick={this.confirmButton.bind(this)}>Submit</Button>
                  </div>
                </div>
              </Modal.Footer>
            </div>
          </Modal.Dialog>
        </div>
      </div>

    );
  }
}
