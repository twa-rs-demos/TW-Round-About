import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">

        <div className="information-tips-left">
          <div className="footer-theme">
            <img src="./public/images/small-logo.png"/>
            <span className="information-theme">Roundabout</span>
          </div>
          <div className="introduction-text">
            <span>
                Roundabout is a social enterprise headed by volunteers. We
                provide a free service connecting those who wish to give,be
                that monetary or otherwise, to those in need.
            </span>
            <i className="fa fa-home"> Address:Yuyang Road West, Off An Hua Road (Behind<br/> Yosemite Villa Compound),
              Shunyi District.</i>
            <i className="fa fa-clock-o" aria-hidden="true"> Open Time: Mon-Sat 9.30am-5.30pm</i>
            <i className="fa fa-phone" aria-hidden="true"> Mobile Phone:137 1877 7761 (English), 137 1805 3814<br/>
              (Chinese only)</i>
            <i className="fa fa-envelope-square" aria-hidden="true"> Email: <span className="email-text">roundaboutvolunteer@yahoo.co.uk</span></i>
          </div>
        </div>

        <div className="information-tips-center">
          <div>
            <span>Want to join us? </span>
            <a href="#" className="news-text">Newsletter Center</a>
          </div>
          <div>
            <a href="#"> Apply To Volunteer Today ></a>
            <a href="#" className="news-text">News & Events</a>
          </div>

          <div className="enquiry">
            <span>Have an enquiry?</span>
            <a href="#" className="break-line">Contact Us Now ></a>
          </div>
        </div>

        <div className="information-tips-right">
          <img src="./public/images/taobao01.png" alt=""/>
          <img src="./public/images/wechat01.png" alt=""/>
          <img src="./public/images/Weibo01.png" alt=""/>
          <div className="QRcode-text">
            <span>淘宝</span>
            <span className="WeChat-text">微信</span>
            <span>微博</span>
          </div>
        </div>

        <div><img src="./public/images/footer.png" className="foot-annotation" alt=""/></div>

      </div>
    );

  }
}
