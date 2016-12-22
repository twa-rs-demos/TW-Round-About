import {Component} from 'react';

export default class FormTop extends Component {
  render() {
    return (
      <div className='no-margin-top'>
        <p>
          Thank you for requesting a pick up of your donations,we will try our best to help<br />
          Please start by filling in the this form.One of our staff will then contact you to make arrangement
          for the pick up <br />
          Thank you for giving us as much notice as possible.
        </p>
        <div className='row'>
          <p className='input-name-text col-md-6'>Your First Name <span className='pink'>*</span><input
            type='text' className='name-input'/></p>
          <p className='input-name-text col-md-6'>Your Last Name <span className='pink'>*</span><input
            type='text' className='name-input'/></p>
        </div>
      </div>
    );
  }
}
