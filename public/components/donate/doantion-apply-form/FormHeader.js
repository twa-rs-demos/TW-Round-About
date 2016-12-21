import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';


export default class FormHeader extends Component{
  render(){
    return (
      <div className="apply-form-header">
        <Button onClick={this.props.closeApplyForm}><img className="close-btn applyform-btn"
                                                         src="./public/images/home/close.png"/></Button>
        <h3>REQUEST FOR PICK UP OF DONATIONS</h3>
        <span className="pink header-right">*Required Fields</span>
      </div>
    )
  }
}
