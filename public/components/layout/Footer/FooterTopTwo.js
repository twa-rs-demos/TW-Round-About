import React, {Component} from 'react';
import VolunteerForm from './VolunteerForm';

export default class FooterTopTwo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowVolunteerForm: false,
      isContactUSForm: false
    };
  }

  gotoVolunteer() {
    $('.overlay').fadeIn(400);
    this.setState({
      isShowVolunteerForm: true
    })
  }

  gotoContact() {
    $('.overlay').fadeIn(400);
    this.setState({
      isContactUSForm: true
    });
  }

  showForm() {
    if (this.state.isShowVolunteerForm) {
      this.setState({
        isShowVolunteerForm: false
      });
    }
    if (this.state.isContactUSForm) {
      this.setState({
        isContactUSForm: false
      });
    }
    $('.overlay,.donation-apply-form').fadeOut(400, function () {
      $(this).removeAttr('style');
    });
  }

  render() {
    return (
      <div>
        <div className="two-title">
          <p className="footer-left-right">Want to join us?</p>
          <p className="red-text" onClick={this.gotoVolunteer.bind(this)}> Apply To Volunteer Today > </p>
          <p className="footer-left-right">Have an enquiry?</p>
          <p className="red-text" onClick={this.gotoContact.bind(this)}>Contact Us Now > </p>
        </div>
        <div className={this.state.isShowVolunteerForm ? '' : 'hidden'}>
          <VolunteerForm showForm={this.showForm.bind(this)}
                         title="VOLUNTEERS APPLICATION FORM" inputTextInfo="Email Address"
                         textAreaInfo="Commits"/>
        </div>

        <div className={this.state.isContactUSForm ? '' : 'hidden'}>
          <VolunteerForm showForm={this.showForm.bind(this)}
                         title="You may also fill the form below contact us" inputTextInfo="Enquiry"
                         textAreaInfo="Description"/>
          />
        </div>
        <div className="overlay"></div>
      </div>
    )
  }
}
