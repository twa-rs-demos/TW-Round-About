import {Component} from 'react';
import {Link} from 'react-router';
import imgData from '../pictureDate';

export default class Logo extends Component {
  render() {
    return (
      <div className='row logo'>
        <Link to={URI_PREFIX + '/'}> <img src={imgData.Logo} alt='logo'/></Link>
      </div>
    );
  }
}
