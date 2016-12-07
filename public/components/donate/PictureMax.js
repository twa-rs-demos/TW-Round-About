import React, {Component} from 'react';

export default class PictureMax extends Component{
  render(){
    const pictureSrc = "./public/images/donate/hero_donate.png";
    return (
      <div className="picture-max">
        <img src={pictureSrc} />
        <div className="donate-img-text">
        <h2>“施比受更为有福。”</h2>
        <h3>—— St Francis of Assisi</h3>
        </div>
      </div>
    )
  }
}
