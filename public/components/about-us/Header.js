import {Component} from 'react';

export default class Header extends Component {

  render() {
    return (
      <div id='aboutUs-header'>
        <h3 className='middle-title aboutUs-title'>每个孩子都应该享有同样的机会</h3>
        <div className='text-center'>
          <button className='button-style button-change-destiny'>改变TA的命运</button>
        </div>
        <div className='video about-video'>
          <embed src='http://player.youku.com/player.php/sid/XMTM1NjIyMTA0NA==/v.swf'
                 width='950' height='396'
                 type='application/x-shockwave-flash'>
          </embed>

        </div>
      </div>
    );
  }
}
