import React, {Component} from 'react';

export default class DonateWay extends Component{

  render() {

    return (
      <div className="donate-way">

        <h2 className="donate-way-title">
          捐款方式
        </h2>

        <div className="container donate-way-content">
          <div className="row donate-way-row">
            <div className="col-md-4">
              <h3>物品捐赠</h3>
              <ul>
                <li>捐赠指南</li>
                <li>捐赠物品代收点</li>
                <li>上门收取捐赠物品申请表</li>
              </ul>
            </div>

            <div className="col-md-4  donate-way-donation">
              <h3>捐款</h3>
              <div className="row row-1">
                <div className="col-md-6 donate-way-flag-1"><img src="./public/images/donate/wechat01.png" /><h4>Wechat</h4></div>
                <div className="col-md-6 donate-way-flag-2"><img src="./public/images/donate/logo_ccafc.png" /><h4>CCAFC</h4></div>
              </div>
              <div className="row">
                <div className="col-md-6 donate-way-flag-1"><img src="./public/images/donate/logo_alipay.png" /><h4>Alipay</h4></div>
                <div className="col-md-6 donate-way-flag-2"><img src="./public/images/donate/logo_paypal.png" /><h4>Paypal</h4></div>
              </div>
            </div>

            <div className="col-md-4  donate-way-project ">
              <h3>募捐项目</h3>
              <p>直接通过乐捐捐款</p>
              <div>
                <img src="./public/images/donate/wechat01.png" />
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
