import {Component} from 'react';

export default class FormSubmit extends Component {
  render() {
    return (
      <div className='apply-form-button row'>
        <div className='col-xs-2'>
          <button className='btn btn-default btn-md'>Cancel</button>
        </div>
        <div className='col-xs-offset-1 col-xs-2'>
          <button className='btn btn-default btn-md'>Submit</button>
        </div>
      </div>
    );
  }
}
