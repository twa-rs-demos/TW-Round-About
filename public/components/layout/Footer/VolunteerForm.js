import {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../../../style/modalForm.less';

export default class VolunteerForm extends Component {

  render() {
    return (
      <div id='modal-volunteer-content'>
        <div className='row'>

          <div className='col-md-11 col-xs-11 '>
            <div className='modal-title-info'>
              <span>{this.props.title}</span>
            </div>
            <div className='row'>

              <div className='col-md-3 col-xs-4  info-right info-margin'>
                <span> FistName<span className='pink'>*</span></span>
              </div>
              <div className='col-md-3 col-xs-8 info-margin'>
                <input type='text' className='input-info' required='required'/>
              </div>

              <div className='col-md-3 col-xs-4 info-right info-margin'>
                <span> LastName<span className='pink'>*</span></span>
              </div>
              <div className='col-md-3 col-xs-8 info-margin'>
                <input type='text' className='input-info' required='required'/>
              </div>

            </div>

            <div className='row '>

              <div className='col-md-3 col-xs-4 info-right info-margin'>
                <span> Age<span className='pink'>*</span></span>
              </div>
              <div className='col-md-3 col-xs-8 info-margin'>
                <input type='text' className='input-info' required='required'/>
              </div>

              <div className='col-md-3  col-xs-4 info-right info-margin'>
                <span>Telephone Number<span className='pink'>*</span></span>
              </div>
              <div className='col-md-3 col-xs-8 info-margin'>
                <input type='text' className='input-info' required='required'/>
              </div>

            </div>

            <div className='row'>
              <div className='col-md-3  col-xs-4 info-right info-margin'>
                <span>{this.props.inputTextInfo}<span className='pink'>*</span></span>
              </div>
              <div className='col-md-9 col-xs-8 info-margin'>
                <input type='text' className='text-length input-info' required='required'/>
              </div>
            </div>

            <div className='row '>
              <div className='col-md-3 col-xs-4 info-right '>
                <span>{this.props.textAreaInfo}<span className='pink'>*</span></span>
              </div>
              <div className='col-md-9 col-xs-8 info-margin'>
                  <textarea rows='10' className='textArea-volunteerForm col-md-7 col-xs-8'
                            placeholder='5000 Characters Max'
                            maxLength='5000' required='required'/>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-offset-3 col-md-3 col-xs-offset-4 col-xs-3'>
                <Button className='btn-Cancel btn btn-default btn-sm'>Cancel</Button>
              </div>
              <div className='col-md-offset-1 col-md-3 col-xs-offset-1 col-xs-3'>
                <Button className='btn-Submit btn btn-default btn-sm'>Submit</Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
