import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class DonationApplyForm extends Component {
  render() {
    return (

      <div className="donation-apply-form">
        <Modal.Dialog>
          <Modal.Header>
            <div className="apply-form-header">
              <Button onClick={this.props.closeApplyForm}><img className="close-btn applyform-btn"
                                                               src="./public/images/home/close.png"/></Button>
              <h2>REQUEST FOR PICK UP OF DONATIONS</h2>
              <span className="pink header-right">*Required Fields</span>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="no-margin-top">
              <form>
                <div className="no-margin-top">
                  <p>
                    Thank you for requesting a pick up of your donations,we will try our best to help<br />
                    Please start by filling in the this form.One of our staff will then contact you to make arrangement
                    for the pick up <br />
                    Thank you for giving us as much notice as possible.
                  </p>
                  <div className="row">
                    <p className="input-name-text col-md-6">Your First Name <span className="pink">*</span><input
                      type="text" className="name-input"/></p>
                    <p className="input-name-text col-md-6">Your Last Name <span className="pink">*</span><input
                      type="text" className="name-input"/></p>
                  </div>
                </div>
                <div className="content">
                  <h3>Address that you would like your donations picked up from:</h3>
                  <div className="row">
                    <div className="col-md-3">
                      <p className="input-address-text">
                        In ENGLISH<span className="pink">*</span>
                      </p>
                    </div>
                    <div className="col-md-9">
                      <input type="text"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <p className="input-address-text">
                        In CHINESE<span className="pink">*</span>
                      </p>
                    </div>
                    <div className="col-md-9">
                      <input type="text"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <p className="input-address-text">
                        Email Address<span className="pink">*</span>
                      </p>
                    </div>
                    <div className="col-md-9">
                      <input type="text"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <p className="input-address-text">
                        In ENGLISH<span className="pink">*</span>
                      </p>
                    </div>
                    <div className="col-md-9">
                      <input type="text"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <p className="input-address-text">
                        Home Phone
                      </p>
                    </div>
                    <div className="col-md-9">
                      <input type="text"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <p className="input-address-text">
                        Mobile Number<span className="pink">*</span>
                      </p>
                    </div>
                    <div className="col-md-9">
                      <input type="text"/>
                    </div>
                  </div>
                </div>
                <div className="call-language">
                  <h3>Would you prefer the call from Rounfabout to be in which language?</h3>
                  <div className="checkboxes">
                    <p className="checkbox-item"><input type="checkbox" className="call-language-checkbox"/>English</p>
                    <p className="checkbox-item"><input type="checkbox" className="call-language-checkbox"/>Chinese</p>
                    <p className="checkbox-item"><input type="checkbox" className="call-language-checkbox"/>Either</p>
                  </div>
                  <p>On the form below, please list the items that you wish to have picked up. There is no need to
                    itemize small
                    items- "1 x box of clothing + 1 x box of kitchen wear" Would be suffice.Please do however list
                    larger items as
                    as this will help us to assess the size of vehicle needed to do your pick up.</p>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-2 col">Quantity</div>
                      <div className="col-md-5 col">Description</div>
                      <div className="col-md-5 col">Value of High Priced Items</div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col">
                        <input type="text" placeholder="Number"/>
                      </div>
                      <div className="col-md-5 col">
                        <input type="text" placeholder="box of clothing"/>
                      </div>
                      <div className="col-md-5 col">
                        <input type="text" placeholder="300rmb"/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col">
                        <input type="text" placeholder=""/>
                      </div>
                      <div className="col-md-5 col">
                        <input type="text" placeholder=""/>
                      </div>
                      <div className="col-md-5 col">
                        <input type="text" placeholder=""/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-notes">
                  <h3>NOTES:</h3>
                  <ul>
                    <li>Large items of fumiture - monetary donation not necessary</li>
                    <li>Large volumes of donations -- monetary donation not necessary</li>
                    <li>4-6 large bin bags or medium sized boxes of donations = minimum donation of 30rmb towards
                      transport costs PLEASE GIVE TO THE DRIVER AT THE TIME OF PICK UP.
                    </li>
                    <li>1-3 large bin bags or medium sized boxes of donations = minimum donation of 50rmb towards
                      transport costs PLEASE GIVE TO THE DRIVER AT THE TIME OF PICK UP.
                    </li>
                    <li>(If you would rather not make this monetary donation them perhaps you could consider getting
                      together with friend or neighbours and combine your donations,or perhaps you can drop off your
                      donations at one of your donations at one of our collection points)
                    </li>
                  </ul>
                </div>
                <div className="apply-form-button row">
                  <div className="col-xs-offset-1 col-xs-2">
                    <button className="btn btn-default btn-md">Cancel</button>
                  </div>
                  <div className="col-xs-offset-1 col-xs-2">
                    <button className="btn btn-default btn-md">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }
}

