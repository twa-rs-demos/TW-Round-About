import React, {Component} from 'react';

export default class BecomePartners extends Component {
  render() {
    return (<div>
      <h2 className='middle-title no-padding'>成为我们的合作伙伴</h2>
      <div className='partner-form'>
        <div className='row margin-bottom'>
          <div className='col-sm-4 col-xs-12'>
            <label className='label-name'>First Name</label>
            <input type='text' className='input-style name form-height'/>
          </div>
          <div className='col-sm-4 col-xs-12'>
            <label className='label-name'>Last Name</label>
            <input type='text' className='input-style name form-height'/>
          </div>
          <div className='col-sm-4 col-xs-12'>
            <label className='label-name'>Email Address</label>
            <input type='text' className='input-style full-width form-height'/>
          </div>
        </div>
        <div className='row margin-bottom'>
          <div className='col-sm-6 col-xs-12'>
            <label className='label-name'>Company Name</label>
            <input type='text' className='input-style full-width form-height'/>
          </div>
          <div className='col-sm-6 col-xs-12'>
            <label className='label-name'>Company Website</label>
            <input type='text' className='input-style full-width form-height'/>
          </div>
        </div>
        <div className='row margin-bottom'>
          <div className='col-sm-6 col-xs-12'>
            <select className='input-style full-width form-height'>
              <option value='CAMPAING SPONSOR'>CAMPAING SPONSOR</option>
              <option value='lime'>Lime</option>
              <option value='coconut'>Coconut</option>
              <option value='mango'>Mango</option>
            </select>
          </div>
        </div>
        <div className='row margin-bottom'>
          <div className='col-sm-12'>
            <label className='label-name'>Leave a Message</label>
            <textarea rows='5' className='input-style full-width'/>
          </div>
        </div>
        <div className='row margin-bottom'>
          <div className='col-sm-12 text-right'>
            <button className='send-button'>发送</button>
          </div>
        </div>
      </div>
    </div>);
  }
}
