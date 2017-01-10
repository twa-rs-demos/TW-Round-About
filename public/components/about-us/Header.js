import {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {

  render() {
    return (
      <div id='aboutUs-header'>
        <h3 className='middle-title aboutUs-title'>每个孩子都应该享有同样的机会</h3>
        <div className='text-center'>
          <Link to={URI_PREFIX + '/donate'}>
            <button className='button-style button-change-destiny'>改变TA的命运</button>
          </Link>
        </div>
        <div className='video about-video row'>
          <div className='col-md-offset-2 col-md-8 col-xs-12'>
            <embed src='http://player.youku.com/player.php/sid/XMTM1NjIyMTA0NA==/v.swf'
                   type='application/x-shockwave-flash' className='video-content'>
            </embed>
          </div>
        </div>
      </div>
    );
  }
}
