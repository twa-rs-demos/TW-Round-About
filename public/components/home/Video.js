import {Component} from 'react';

export default class media extends Component {
  render() {
    return (
      <div id='video'>
        <div className='we-are-ra'>
          <h2 className='middle-title'>我们是众爱</h2>
        </div>
        <p className='middle-describe'>众爱是连接捐款人和受助人的桥梁</p>
        <div className='video home-video row'>
          <div className="col-md-offset-2 col-md-8 col-xs-12">
            <embed src='http://player.youku.com/player.php/sid/XMTM1NjIyMTA0NA==/v.swf'
                   type='application/x-shockwave-flash' className='video-content'>
            </embed>
          </div>
        </div>
      </div>
    );
  }
}
