import React, {Component} from 'react';

export default class FooterTopTwo extends Component{



  gotoVolunteer() {
    this.setState({
      isShowVolunteerForm: true
    })
  }

  gotoContact() {
    this.setState({
      isContactUSForm: true
    })
  }


  render(){
    return (
        <div className="two-title">
          <p className="footer-left-right">Want to join us?</p>
          <p className="red-text" onClick={this.gotoVolunteer.bind(this)}> Apply To Volunteer Today > </p>
          <p className="footer-left-right">Have an enquiry?</p>
          <p className="red-text" onClick={this.gotoContact.bind(this)}>Contact Us Now > </p>
        </div>
    )
  }
}
