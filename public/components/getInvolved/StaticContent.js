import React, {Component} from 'react';

export default class StaticContent extends Component{
  render(){
    return (
        <div className="container get-involved-welcome">
          <h2 className="donate-way-title">欢迎来到众爱大家庭</h2>
          <div className="row">
            <div className="col-md-6">
              <img src="./public/images/getInvolved/icon_volunteer.png"/>
              <h4>加入志愿者行列</h4>
            </div>
            <div className="col-md-6  get-involved-second-col">
              <img src="./public/images/getInvolved/icon_apply.png"/>
              <h4>申请救助和支援</h4>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <img src="./public/images/getInvolved/icon_support.png"/>
              <h4>合作与支持的慈善机构</h4>
            </div>
            <div className="col-md-6 get-involved-second-col">
              <img src="./public/images/getInvolved/icon_donate.png"/>
              <h4>捐赠</h4>
            </div>
          </div>

          <div className="row get-involved-last-row">
            <div className="col-md-6">
              <img src="./public/images/getInvolved/icon_support.png"/>
              <h4>您的捐赠可以帮到谁</h4>
            </div>
            <div className="col-md-6 get-involved-second-col">
              <img src="./public/images/getInvolved/icon_community center.png"/>
              <h4>社区中心</h4>
            </div>
          </div>
        </div>
    )
  }
}
