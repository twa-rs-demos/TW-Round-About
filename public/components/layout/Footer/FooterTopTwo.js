import {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import VolunteerForm from './VolunteerForm';


export default class FooterTopTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowVolunteerForm: false,
      isContactUSForm: false,
      showModal: false
    };
  }

  gotoVolunteer() {
    this.setState({
      isShowVolunteerForm: true,
      showModal: true
    });
  }

  gotoContact() {
    this.setState({
      isContactUSForm: true,
      showModal: true
    });
  }

  close() {
    this.setState({
      isShowVolunteerForm: false,
      isContactUSForm: false,
      showModal: false
    });
  }

  render() {
    return (
      <div className='col-sm-offset-1 col-sm-10 col-xs-offset-0 col-xs-12 no-padding'>
        <div className='two-title'>
          <p className='col-two-text'>Want to join us?</p>
          <p className='red-text' onClick={this.gotoVolunteer.bind(this)}> Apply To Volunteer Today > </p>
          <p className='col-two-text'>Have an enquiry?</p>
          <p className='red-text' onClick={this.gotoContact.bind(this)}>Contact Us Now > </p>
        </div>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <div className={this.state.isShowVolunteerForm ? '' : 'hidden'}>
              <VolunteerForm title='VOLUNTEERS APPLICATION FORM' inputTextInfo='Email Address'
                             textAreaInfo='Commits'/>
            </div>
            <div className={this.state.isContactUSForm ? '' : 'hidden'}>
              <VolunteerForm title='You may also fill the form below contact us' inputTextInfo='Enquiry'
                             textAreaInfo='Description'/>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
