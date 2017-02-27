import {Component} from 'react';
import DonateGuide from './DonateGuide';
import DonateRules from './DonateRules';
import DonationApplyForm from './doantion-apply-form/index';
import {Modal, Button} from 'react-bootstrap';


export default class ItemDonate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowElasticBox: false,
      isShowApplyForm: false
    };
  }

  showElasticBox() {
    this.setState({isShowElasticBox: true});
  }

  closeElasticBox() {
    this.setState({isShowElasticBox: false});
  }

  closeApplyForm() {
    this.setState({isShowApplyForm: false});
  }

  openApplyForm() {
    this.setState({isShowApplyForm: true});
    console.log('nihaoshijie');
  }

  render() {
    return (
      <div className='item-donation' id='item-donation'>
        <div className='item-donation-title'>
          <h2 className='middle-title'>物品捐赠</h2>
        </div>
        <div className='row'>
          <div>
            <img className='item-donation-img' src='http://localhost/tw-ra/public/images/donate/Item donation.png'/>
          </div>
        </div>
        <div className='row'>
          <div className='donate-guide col-sm-offset-2 col-xs-offset-0 col-sm-8 col-xs-12 no-padding'>
            <h3 className='donate-items-title'><a className='donate-guide-title'
                                                  onMouseOver={this.showElasticBox.bind(this)}>捐赠指南</a></h3>
            {this.state.isShowElasticBox ? <DonateRules closeElasticBox={this.closeElasticBox.bind(this)}/> : ''}
            <div className='col-md-offset-2 col-xs-offset-1 col-md-8 col-xs-10 donate-guide-content'>
              <p>Open, prescription and out of date medicines.</p>
              <p>Used underwear, including socks.</p>
              <p>Anything previously used by an animal – such as a dog’s bed</p>
              <p>Copies of magazines over 6 months old.</p>
              <p>Computers, monitors and printers over 4 years old.</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 donate-collect-items'>
            <DonateGuide/>
          </div>
        </div>
        <div className='donate-guide-apply row'>
          <div className='container donate-guide-apply col-xs-12' id='donate-guide-apply-hash'>
            <h3 className='donate-items-title'>申请上门收取捐赠物品</h3>
            <div className='apply-extra-info'>
              <p>Thank you for requesting a pick up of your donations, we will try our best to help.</p>
              <p>Please start by filling in the pick up request form. One of our staff will then contact you to
                make
                arrangements for the pick up. Please allow 2 business days for us to respond, as we have a small
                staff.
              </p>
              <p>**Due to the nature of Beijing traffic, we cannot guarantee an exact pick-up time. We will strive
                to
                arrive within a 1-hour window and call you if our driver is running late. Thank you for giving
                us as
                much notice as possible. The more notice you give us, the more likely we will be to have vans
                and
                trucks available at your preferred time.**
              </p>
              <p>Large items of furniture – monetary donation not necessary</p>
            </div>
            <div className='col-sm-offset-4 col-xs-offset-0 col-sm-4 col-xs-12 apply-collect-items'>
              <button className='apply-button js-open-box' onClick={this.openApplyForm.bind(this)}>上门收取捐赠物品申请表
              </button>

              <Modal show={this.state.isShowApplyForm} onHide={this.closeApplyForm.bind(this)}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                  <DonationApplyForm/>
                </Modal.Body>
              </Modal>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
