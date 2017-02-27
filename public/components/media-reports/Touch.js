import React, {Component} from 'react';

export default class Touch extends Component {
  submitForm(e){
    e.preventDefault();

    //此处定义输入，对每个输入进行合法性验证。
    let firstName = this.refs.firstName.value.trim();
    let lastName = this.refs.lastName.value.trim();
    let email = this.refs.emial.value.trim();
    let phoneNum = this.refs.phoneNum.value.trim();
    let enquiry = this.refs.enquiry.value.trim();
    let description = this.refs.description.value.trim();

    if(!firstName||!lastName){
      return;
    }

    //提交表单
    //this.props.onCommentSubmit({firstName:firstName,lastName:lastName});

    //清空表单
    this.clearInput(e);
  }

  clearInput(e) {
    e.preventDefault();

    this.refs.firstName.value = '';
    this.refs.lastName.value = '';
    this.refs.email.value = '';
    this.refs.phoneNum.value = '';
    this.refs.enquiry.value = '';
    this.refs.description.value = '';
  }


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
              <form onSubmit={this.submitForm.bind(this)} >
                <div className="row">
                  <div className=" col-sm-6 col-xs-12 touch-item">
                    <div className="col-md-12">First Name<span className="pink">*</span></div>
                    <div className="col-md-12"><input type="text" ref='firstName'/></div>
                  </div>
                  <div className=" col-sm-6 col-xs-12 touch-item">
                    <div className="col-md-12">Company Last Name<span className="pink">*</span></div>
                    <div className="col-md-12"><input type="text" ref='lastName'/></div>
                  </div>
                  <div className=" col-sm-6 col-xs-12 touch-item">
                    <div className="col-md-12">Email Address<span className="pink">*</span></div>
                    <div className="col-md-12"><input type="text" ref="email"/></div>
                  </div>
                  <div className=" col-sm-6 col-xs-12 touch-item">
                    <div className="col-md-12">Telephone Number<span className="pink">*</span></div>
                    <div className="col-md-12"><input type="text" ref='phoneNum'/></div>
                  </div>
                  <div className=" col-sm-12 col-xs-12 touch-item">
                    <div className="col-md-12">Enquiry<span className="pink">*</span></div>
                    <div className="col-md-12"><input type="text" ref='enquiry'/></div>
                  </div>
                  <div className="col-xs-12 touch-item">
                    <div className="col-xs-12">Description<span className="pink">*</span></div>
                    <div className="col-xs-10">
                      <textarea rows="4" placeholder="200 Characters Max" maxLength="200" required="required"
                                className="col-xs-12 touch-textarea" ref='description'/>
                    </div>
                  </div>
                  <div className="col-md-2 col-xs-4">
                    <button className="btn btn-default btn-md touch-button" onClick={this.clearInput.bind(this)}>取消
                    </button>
                  </div>
                  <div className="col-md-2 xol-xs-4">
                    <button className="btn btn-default btn-md touch-button button-click">提交</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
