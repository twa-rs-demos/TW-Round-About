import React, {Component} from 'react';

export default class ApplyMonthly extends Component {
  render() {
    return (
      <div className="apply-monthly-report">
        <img src="./images/apply-monthly-icon.png"/>
        <div className="apply-monthly-report-text">申领月报</div>
        <form onSubmit={this._onSubmit.bind(this)}>
          <input type="text" className="input-email" placeholder="请输入你的电子邮箱"/>
          <button className="submit" type="submit">提交</button>
        </form>
      </div>
    )
  }
  _onSubmit(event) {}
};
