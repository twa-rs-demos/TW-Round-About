import React, {Component} from 'react';

export default class Touch extends Component {
  render() {
    return (
      <div className="touch">
        <div className="container">
          <div className="row">
            <div className="col-sm-offset-2 col-sm-9 col-xs-12">
              <div className="row touch-top-line">
                <div className="col-sm-8 col-xs-7">Get in Touch</div>
                <div className="col-sm-4 col-xs-5 pink">* Required Fields</div>
              </div>
              <div className="row">
                <div className=" col-sm-6 col-xs-12 touch-item">
                  <div className="col-md-12">First Name<span className="pink">*</span></div>
                  <div className="col-md-12"><input type="text"/></div>
                </div>
                <div className=" col-sm-6 col-xs-12 touch-item">
                  <div className="col-md-12">Company Last Name<span className="pink">*</span></div>
                  <div className="col-md-12"><input type="text"/></div>
                </div>
                <div className=" col-sm-6 col-xs-12 touch-item">
                  <div className="col-md-12">Email Address<span className="pink">*</span></div>
                  <div className="col-md-12"><input type="text"/></div>
                </div>
                <div className=" col-sm-6 col-xs-12 touch-item">
                  <div className="col-md-12">Telephone Number<span className="pink">*</span></div>
                  <div className="col-md-12"><input type="text"/></div>
                </div>
                <div className=" col-sm-12 col-xs-12 touch-item">
                  <div className="col-md-12">Enquiry<span className="pink">*</span></div>
                  <div className="col-md-12"><input type="text"/></div>
                </div>
                <div className="col-xs-12 touch-item">
                  <div className="col-xs-12">Description<span className="pink">*</span></div>
                  <div className="col-xs-10">
                    <textarea rows="4" placeholder="200 Characters Max" maxLength="200" required="required" className="col-xs-12 touch-textarea"/>
                  </div>
                </div>
                <div className="col-md-2 col-xs-4">
                  <button className="btn btn-default btn-md touch-button">取消</button>
                  </div>
                <div className="col-md-2 xol-xs-4">
                  <button className="btn btn-default btn-md touch-button button-click">提交</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
