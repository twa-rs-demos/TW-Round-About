import React, {Component} from 'react';

export default  class MainMenu extends Component {
  render() {
    return (
      <div className="items col-md-3 row top-right-items no-padding">
        <a href="#" className="col-sm-2 no-padding">月报中心</a>
        <a href="#" className="col-sm-2 no-padding">月报申领</a>
        <a href="#" className="col-sm-2 no-padding">English</a>
        <a href="#" className="col-sm-1 no-padding">
          <img src="./public/images/icon_wechat.png" className="taobao"/>
        </a>
        <a href="#" className="col-sm-1 no-padding">
          <img src="./public/images/icon_weibo.png" className="taobao"/>
        </a>
        <a href="#" className="col-sm-1 no-padding">
          <img src="./public/images/icon_taobao.png" alt="" className="taobao"/>
        </a>
      </div>
    );
  }
}
