import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';

class ModalSuccess extends Component {
  render() {
    return (
      <div className="static-modal" id="myModal">
        <Modal.Dialog>
          <Modal.Body>
            <p> 提交成功</p>
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

  onSubmit() {

    this.setState({isShowModalSuccess: true}, ()=> {
      setTimeout(()=> {
        this.setState({
          isShowModalSuccess: false
        })
      }, 5000);
    })

  }

  render() {
    return (
      <div>
        <div className="apply-monthly-report" id="apply-monthly-report">
          <img src="./public/images/icon_newsletter.png"/>
          <div className="apply-monthly-report-text">申领月报</div>
          <input type="email" className="input-email" placeholder="请输入你的电子邮箱"/>
          <button className="submit " type="submit" onClick={this.onSubmit.bind(this)}>提交</button>
        </div>
        <div className={this.state.isShowModalSuccess ? '' : 'hidden'}>
          <ModalSuccess/>
        </div>
      </div>
    )
  }
};
