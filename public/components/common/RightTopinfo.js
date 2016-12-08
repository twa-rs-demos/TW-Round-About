import React, {Component} from 'react';

export default  class MainMenu extends Component {
  render() {
    return (
        <div className="items col-md-4 row top-right-items">
          <a href="#" className="col-sm-3">月报中心</a>
          <a href="#" className="col-sm-3">月报申领</a>
          <a href="#" className="col-sm-2">English</a>
          <a href="#" className="col-sm-1">
            <img src="./public/images/icon_wechat.png" className="taobao"/>
          </a>
          <a href="#" className="col-sm-1">
            <img src="./public/images/icon_weibo.png" className="taobao"/>
          </a>
          <a href="#" className="col-sm-1">
            <img src="./public/images/icon_taobao.png" alt="" className="taobao"/>
          </a>
        </div>
    );
  }

}
