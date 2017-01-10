import {Component} from 'react';
import Axis from './Axis';

export default class Footer extends Component {

  render() {
    return (
      <div id='aboutUs-footer'>
        <h3 className='middle-title aboutUs-event'>众爱大事记</h3>
        <Axis/>
      </div>
    );
  }
}
