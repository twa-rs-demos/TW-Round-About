import React, {Component} from 'react';

export default  class MainMenu extends Component {
  render() {
    return (
      <div>
        <div className="top-right-items row">
          <div className="col-md-8"></div>
          <div className="items col-md-4 row">
            <a href="#" className="col-sm-3">月报中心</a>
            <a href="#" className="col-sm-3">月报申领</a>
            <a href="#" className="col-sm-2">English</a>
            <a href="#">
              <i className="fa fa-weixin fa-2x col-sm-1" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-weibo fa-2x col-sm-1" aria-hidden="true"></i>
            </a>
            <a href="#">
              {/*<img src="../images/taobao-top.png" alt="" className="taobao">*/}
            </a>
          </div>
        </div>

        <div class="row">
          <a href="#" class="logo col-md-2"></a>
        </div>

      </div>

    )
  }

}
