import React, {Component} from 'react';

export default class media extends Component {
  render() {
    return (
      <div>
        <div className="middle-text">
          <p> 我们是众爱</p>
          <span> 众爱是连接捐款人与受助人的桥梁</span>
        </div>
        <div className="show-video">
          <embed src="http://www.iqiyi" width="620" height="400" className="video"
                 loop="true/false"></embed>
        </div>
      </div>
    )
  }
}
