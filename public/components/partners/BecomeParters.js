import React, {Component} from 'react';

export default class BecomeParters extends Component {
  render() {
    return (<div>
      <h2 className="middle-title no-padding">成为我们的合作伙伴</h2>
      <div className="partner-form">
        <div className="row margin-bottom">
          <div className="col-sm-4">
            <label className="label-name">First Name</label>
            <input type="text" className="input-style name"/>
          </div>
          <div className="col-sm-4">
            <label className="label-name">Last Name</label>
            <input type="text" className="input-style name"/>
          </div>
          <div className="col-sm-4">
            <label className="label-name">Email Address</label>
            <input type="text" className="input-style full-width"/>
          </div>
        </div>
        <div className="row margin-bottom">
          <div className="col-sm-6">
            <label className="label-name">Company Name</label>
            <input type="text" className="input-style full-width"/>
          </div>
          <div className="col-sm-6">
            <label className="label-name">Company Website</label>
            <input type="text" className="input-style full-width"/>
          </div>
        </div>
        <div className="row margin-bottom">
          <div className="col-sm-6">
            <label className="label-name">Partnership of Interest</label>
            <input type="text" className="input-style full-width"/>
          </div>
        </div>
        <div className="row margin-bottom">
          <div className="col-sm-12">
            <label className="label-name">Leave a Message</label>
            <textarea rows="5" className="input-style full-width"/>
          </div>
        </div>
        <div className="row margin-bottom">
          <div className="col-sm-12 text-right">
            <button className="send-button">发送</button>
          </div>
        </div>
      </div>
    </div>);
  }
}
