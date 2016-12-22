import {Component} from 'react';
import {Link} from 'react-router';

export default class FooterTopThree extends Component {
  render() {
    return (
      <div>
        <Link to='/tw-ra/newsLetter-center' className='footer-right-left'>Newsletter Center</Link>
        <Link to='/tw-ra/newAndEvent' className='footer-right-left'>News&Event</Link>
      </div>
    );
  }
}
