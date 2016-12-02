import React, {Component} from 'react';

export  default  class centerMedia extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="#" className="middle-image"></a>
        </div>

        <div className="middle-text">
          <p> 我们是众爱</p>
          <span> 众爱是连接捐款人与受助人的桥梁</span>
        </div>

        <div className="show-video">

          <embed src="http://www.iqiyi" width="620" height="400" className="video" autostart="true/false" loop="true/false"></embed>
      </div>

    <div className="middle-text introduction">
      <p> 我们的工作</p>
      <span> 众爱在全种食品范围内支持个人救助的同时也与其它慈善机构u合作救助</span>
    </div>

  </div>
  )
  }
}
