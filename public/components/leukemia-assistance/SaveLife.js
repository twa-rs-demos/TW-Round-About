import {Component} from 'react';
import {Link} from 'react-router';

export default class extends Component {
  render() {
    return (
      <div className='save-life-situation'>
        <h2 className='middle-title'>我们参与挽救的生命</h2>
        <div className='rescue-situation-img row'>
          <div className='col-xs-12 col-md-3 col-md-offset-3 '>
            <img src='http://localhost/tw-ra/public/images/ourWorkAssistance/lives helped.png'/>
          </div>
          <div className='col-xs-12 col-md-3'>
            <img src='http://localhost/tw-ra/public/images/ourWorkAssistance/raised.png'/>
          </div>
        </div>
        <div className='row'>
          <Link to={URI_PREFIX + '/donate'}>
            <button className='button-style'>参与挽救一个生命</button>
          </Link>
        </div>
      </div>
    );
  }
}
