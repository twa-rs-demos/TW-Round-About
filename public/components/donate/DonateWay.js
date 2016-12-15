import React, {Component} from 'react';
import {Link} from 'react-router';
import Scrollchor from 'react-scrollchor';
export default class DonateWay extends Component {

  render() {

    return (
      <div className="donate-way">

        <h2 className="donate-way-title">
          捐款方式
        </h2>

        <div className="container donate-way-content">
          <div className="row donate-way-row">
            <div className="col-md-4 things-donate">
              <h3>物品捐赠</h3>
              <ul>
                <li><Scrollchor to="#donate-guide-hash"> 捐赠指南</Scrollchor></li>
                <li><Scrollchor to="#donate-guide-collect-hash">捐赠物品代收点</Scrollchor></li>
                <li><Scrollchor to="#donate-guide-apply-hash">上门收取捐赠物品申请表</Scrollchor></li>
              </ul>
            </div>

            <div className="col-md-4  donate-way-donation">
              <h3>捐款</h3>
              <div className="row row-1">
                <div className="col-md-6 donate-way-flag-1"><img src="./public/images/donate/wechat01.png"/><h4>
                  Wechat</h4></div>
                <div className="col-md-6 donate-way-flag-2">
                  <a href="http://www.ccafc.org.cn/templates/Donation/txxx.aspx?nodeid=5&projectid=3299&strname=&jiner=&notes_email=" target="_blank">
                    <img src="./public/images/donate/logo_ccafc.png"/>
                  </a>
                  <h4>CCAFC</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 donate-way-flag-1"><img src="./public/images/donate/logo_alipay.png"/><h4>
                  Alipay</h4></div>
                <div className="col-md-6 donate-way-flag-2"><img src="./public/images/donate/logo_paypal.png"/><h4>
                  Paypal</h4></div>
              </div>
            </div>

            <div className="col-md-4  donate-way-project ">
              <h3>募捐项目</h3>
              <p>直接通过乐捐捐款</p>
              <div>
                <img src="./public/images/donate/wechat01.png"/>
                <h4>腾讯</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="donate-way-text">
          <p>We offer assistance by either directly passing on the items you have donated or by selling them in
            our
            retail store to raise funds. Store proceeds pay for medical costs for orphans and others less
            fortunate,
            sheltered housing for the elderly, warm blankets, food and other basic needs items for distribution.
          </p>
        </div>
      </div>
    )
  }
}
