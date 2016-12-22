import {Component} from 'react';
import {Link} from 'react-router';

export default class Logo extends Component {
  render() {
    return (
      <div className='row logo'>
        <Link to={URI_PREFIX + '/'}> <img src='./public/images/home/index_logo1.png' alt='logo'/></Link>
      </div>
    );
  }
}