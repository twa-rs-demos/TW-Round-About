import {Component} from 'react';

export default class media extends Component {


  render() {

    return (
      <div id='video'>
        <div className='we-are-ra'>
          <h2 className='middle-title'>我们是众爱</h2>
        </div>
        <p className='middle-describe'>众爱是连接捐款人和受助人的桥梁</p>
        <div className="video">
          <embed src='http://player.youku.com/player.php/sid/XMTM1NjIyMTA0NA==/v.swf'
                 width='950' height='396'
                 type='application/x-shockwave-flash'>

          </embed>
        </div>
      </div>
    )
  }
}
