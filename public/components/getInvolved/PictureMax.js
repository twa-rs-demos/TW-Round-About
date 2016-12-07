import React, {Component} from 'react';

export default class PictureMax extends Component{
  render(){
    const pictureSrc = "./public/images/getInvolved/hero_get involved.png";
    return (
      <div className="picture-max">
        <img src={pictureSrc} />
      </div>
    )
  }
}
