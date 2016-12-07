import React, {Component} from 'react';

export default class media extends Component {
  render() {
    return (
      <div>
        <div className="middle-text">
          <p> 众爱是希望的桥梁</p>
          <span> 我们为全国各地需要帮助的孩子募集善款，并把他们推荐给能帮助他们的团体或者个人。</span>
        </div>
        <div className="show-video">
          <embed src="http://www.iqiyi" width="620" height="400" className="video" autostart="true/false"
                 loop="true/false"></embed>
        </div>
      </div>
    )
  }
}
