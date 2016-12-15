import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';

class ModalSuccess extends Component {
  render() {
    return (
      <div className="static-modal" id="myModal">
        <Modal.Dialog>
          <Modal.Body>
            <h6> 提交成功</h6>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    )
  }
}

export default class ApplyMonthly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModalSuccess: false
    }
  }

  _onSubmit() {
    // this.setState({isShowModalSuccess: true}, ()=> {
    //   console.log("mmmmmmmmmmmmm");
    //
    //   setTimeout(function () {
    //     $("#myModal").modal("hide")
    //   }, 7000);
    // })
    // console.log("hhhhhhhhhh");
    // // $(".success").click(function(){
    //   $.bootstrapGrowl('提交成功',{
    //     type: 'success',
    //     delay: 5000,
    //   });
    // });

    // antd.Notification.open({
    //   message: "这是标题",
    //   description: "这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案"
    // });

    // this.setState({
    //   isShowModalSuccess: true
    // })


  }

  render() {
    return (
      <div>
        <div className="apply-monthly-report">
          <img src="./public/images/icon_newsletter.png"/>
          <div className="apply-monthly-report-text">申领月报</div>
          <form onSubmit={this._onSubmit.bind(this)}>
            <input type="email" className="input-email" placeholder="请输入你的电子邮箱"/>
            <button className="submit success btn btn-success" type="submit" onClick={this._onSubmit.bind(this)}>提交
            </button>
          </form>
        </div>
        <div className={this.state.isShowModalSuccess ? '' : 'hidden'}>

        </div>
      </div>
    )
  }
};
