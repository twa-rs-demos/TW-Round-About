import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer row">
        <div className="col-md-6">
          <div className="col-xs-7 footer-right-right">
            <img src="./public/images/small-logo.png"/>
            <span className="information-theme">Roundabout</span>
            <div className="roundabout-info">
              <p>
                Roundabout is a social enterprise headed by volunteers. We
                provide a free service connecting those who wish to give,be
                that monetary or otherwise, to those in need.
              </p>
              <div className="footer-list">
                <div>
                  <img src="./public/images/home/icon_address_white.png"/>
                  <p className="follow-icon"> Address:Yuyang Road West, Off An Hua Road (Behind<br/> Yosemite Villa
                    Compound),
                    Shunyi District.</p>
                </div>
                <div>
                  <img src="./public/images/home/icon_time_white.png"/>
                  <p className="follow-icon"> Open Time: Mon-Sat 9.30am-5.30pm</p>
                </div>
                <div>
                  <img src="./public/images/home/icon_phone_white.png"/>
                  <p className="follow-icon"> Mobile Phone:137 1877 7761 (English), 137 1805 3814<br/>
                    (Chinese only)</p>
                </div>
                <div>
                  <img src="./public/images/home/icon_mail_white.png"/>
                  <p className="follow-icon"> Email: <span
                    className="email-text">roundaboutvolunteer@yahoo.co.uk</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-5 two-title">
            <p className="footer-left-right">Want to join us?</p>
            <p className="red-text"> Apply To Volunteer Today > </p>
            <p className="footer-left-right">Have an enquiry?</p>
            <p className="red-text">Contact Us Now > </p>
          </div>
        </div>
        <div className="col-md-6 footer-right">
          <div className="row">
            <div className="col-xs-4">
              <p className="footer-right-left">Newsletter Center</p>
              <p className="footer-right-left">News&Event</p>
            </div>
            <div className="col-xs-8 footer-right-right">
              <div className="icon-img">
                <img src="./public/images/home/taobao store.png"/>
                <p>淘宝</p>
              </div>
              <div className="icon-img">
                <img src="./public/images/home/wechat store.png"/>
                <p>微信</p>
              </div>
              <div className="icon-img">
                <img src="./public/images/home/Weibo01.png"/>
                <p>微博</p>
              </div>
            </div>
          </div>
          <div className="row footer-right-bottom">@2016 Roundabout China Legal|Privaacy Policy</div>
        </div>
      </div>
    )
  }
}
