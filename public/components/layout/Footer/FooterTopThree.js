import {Component} from 'react';
import {Link} from 'react-router';

export default class FooterTopThree extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to={URI_PREFIX + '/newsAndEvent/newsLetterCenter'} className='footer-right-left'>NewsletterCenter</Link>
        </div>
        <div>
          <Link to={URI_PREFIX + '/newsAndEvent'} className='footer-right-left'>CenterNews&Event</Link>
        </div>
      </div>
    );
  }
}
