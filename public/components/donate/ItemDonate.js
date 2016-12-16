import React, {Component} from 'react';
import DonateGuide from './DonateGuide';
import DonateRules from './DonateRules';
import DonationApplyForm from './DonationApplyForm';

export default class ItemDonate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowElasticBox: false,
    };
  }

  showElasticBox() {
    this.setState({isShowElasticBox: true});
  }

  closeElasticBox() {
    this.setState({isShowElasticBox: false});
  }
  showApplyForm(){
    $('.js-open-box').on('click',function(){
      $('.overlay,.donation-apply-form').fadeIn(400);
    });
    $('.overlay').on('click',function(){
      $('.overlay,.donation-apply-form').fadeOut(400,function(){
        $(this).removeAttr('style');
      });
    });
  }

  render() {
    return (
      <div className="item-donation">
        <h2 className="donate-way-title">物品捐赠</h2>
        <img className="item-donation-img" src="./public/images/donate/Item donation.png"/>
        <div className="donate-guide" id="donate-guide-hash">
          <h3><a id="donate-guide-title" onMouseOver={this.showElasticBox.bind(this)}>捐赠指南</a></h3>

          {this.state.isShowElasticBox ? <DonateRules closeElasticBox={this.closeElasticBox.bind(this)}/> : ''}

          <div className="donate-guide-describe">
            <p>Open, prescription and out of date medicines.<br/>
              Used underwear, including socks.<br/>
              Anything previously used by an animal – such as a dog’s bed
              Copies of magazines over 6 months old.<br/>
              Computers, monitors and printers over 4 years old.
            </p>
          </div>

          <DonateGuide/>

          <div className="container donate-guide-apply" id="donate-guide-apply-hash">
            <h3>申请上门收取捐赠物品</h3>
            <div>
              <p>Thank you for requesting a pick up of your donations, we will try our best to help.
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
              </p>
            </div>
            <button className="apply-button js-open-box" onMouseOver={this.showApplyForm.bind(this)}>上门收取捐赠物品申请表</button>
            <DonationApplyForm/>
            <div className="overlay"></div>
          </div>

        </div>
      </div>
    )
  }
}

