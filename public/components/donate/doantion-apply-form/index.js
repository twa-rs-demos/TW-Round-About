import React, {Component} from 'react';
import FormHeader from './FormHeader';
import FormTop from './FormTop';
import FormContact from './FormConact';
import FormDonateThings from './FormDonateThings';
import FormNotes from './FormNotes';
import FormSubmit from './FormSubmit';
import {Modal, Button} from 'react-bootstrap';


export default class DonationApplyForm extends Component {
  render() {
    return (
      <div className="donation-apply-form">
        <Modal.Dialog>
          <Modal.Header>
            <FormHeader closeApplyForm={this.props.closeApplyForm}/>
          </Modal.Header>
          <Modal.Body>
            <div className="no-margin-top">
              <form>
                <FormTop/>
                <FormContact/>
                <FormDonateThings/>
                <FormNotes/>
                <FormSubmit/>
              </form>
            </div>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }
}

