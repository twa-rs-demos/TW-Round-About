import React, {Component} from 'react';

export default class PictureMax extends Component{
  render(){
    const pictureSrc = "./public/images/home/hero_index.png";
    return (
      <div className="picture-max">
        <img src={pictureSrc} />
        <h2 className="home-text">我们愿意把爱分享给每个需要帮助的孩子。</h2>
      </div>
    )
  }
}
