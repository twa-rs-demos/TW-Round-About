import {Component} from 'react';

export default class ProvideAndQuestion extends Component {
  render() {
    return (
      <div className='provide-and-question row'>
        <div className='col-sm-6 col-xs-12 provide'>
          <div className='title'>提供</div>
          <div className='provided-types'>
            <div className='col-xs-6 provided-name'>
              <button>Items</button>
            </div>
            <div className='col-xs-6 provided-name'>
              <button>Skills & Expertise</button>
            </div>
            <div className='col-xs-6 provided-name'>
              <button>Time</button>
            </div>
            <div className='col-xs-6 provided-name'>
              <button>Other</button>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-xs-12 question'>
          <div className='title'>提问</div>
          <div className='provided-types'>
            <div className='col-xs-6 provided-name'>
              <button>Items</button>
            </div>
            <div className='col-xs-6 provided-name'>
              <button>Skills & Expertise</button>
            </div>
            <div className='col-xs-6 provided-name'>
              <button>Time</button>
            </div>
            <div className='col-xs-6 provided-name'>
              <button>Other</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
