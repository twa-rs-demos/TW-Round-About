import {Component} from 'react';
import {Link} from 'react-router';
import images from '../images';

export default class Logo extends Component {
  render() {
    return (
      <div className='row logo'>
        <Link to={URI_PREFIX + '/'}> <img src={images.Logo} alt='logo'/></Link>
      </div>
    );
  }
}
