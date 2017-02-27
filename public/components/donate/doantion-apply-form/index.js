import {Component} from 'react';
import FormTop from './FormTop';
import FormContact from './FormConact';
import FormDonateThings from './FormDonateThings';
import FormNotes from './FormNotes';
import FormSubmit from './FormSubmit';

export default class DonationApplyForm extends Component {
  render() {
    return (
      <div id='donation-apply-form'>
            <div className='no-margin-top'>
              <form>
                <FormTop/>
                <FormContact/>
                <FormDonateThings/>
                <FormNotes/>
                <FormSubmit/>
              </form>
            </div>
      </div>
    );
  }
}

