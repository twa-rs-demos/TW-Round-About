import {Component} from 'react';
import {Link} from 'react-router';

export default class FooterTopThree extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to={URI_PREFIX + '/newsAndEvent/newsLetterCenter'} className='col-three-text'>NewsletterCenter</Link>
        </div>
        <div>
          <Link to={URI_PREFIX + '/newsAndEvent'} className='col-three-text'>CenterNews&Event</Link>
        </div>
      </div>
    );
  }
}
