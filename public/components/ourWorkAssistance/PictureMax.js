import React, {Component} from 'react';

export default class PictureMax extends Component {
  render() {
    const pictureSrc = "./public/images/ourWorkAssistance/hero_leukemia assistance.png";
    return (
      <div className="picture-max">
        <img src={pictureSrc}/>
        <div className="ourWorkAssistence-picture-text">
          <p>Yang bin is a 9 year old boy from Xi’an.</p>
          <p> He was diagnosed with leukemia in 2015.</p>
          <p> The dignity of our recipients is something</p>
          <div className="ourWorkAssistence-picture-btn">阅读杨斌的故事</div>
        </div>
        <div className="ourWorkAssistence-picture-readMore">阅读更多></div>
      </div>
    )
  }
}
