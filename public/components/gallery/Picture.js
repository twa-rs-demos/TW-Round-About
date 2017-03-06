import {Component} from "react";
import images from "./images";
import pictureDates from './pictureData';

export default class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureIndex: 0
    }
  }

  handleLeftPicture() {
    if (this.state.pictureIndex === 0) {
      this.setState({
        pictureIndex: pictureDates.length - 1
      });
    }
    else {
      this.setState({
        pictureIndex: this.state.pictureIndex - 1
      });
    }
  }

  handleRightPicture() {
    if (this.state.pictureIndex === pictureDates.length - 1) {
      this.setState({
        pictureIndex: 0
      });
    }
    else {
      this.setState({
        pictureIndex: this.state.pictureIndex + 1
      });
    }
  }

  render() {

    return (
      <div id='gallery-picture'>
        <div className='container'>

          <h1 className='title'>ASTOUNDING BOOK FAIR SUCCESS AT THE BRITISH SCHOOL</h1>
          <div className='text-right carousel-arrowsmall col-xs-offset-1 col-xs-10'>

            <img src={images.carouselArrowsmallLeft}
                 onClick={this.handleLeftPicture.bind(this)}/>
            {this.state.pictureIndex + 1} / {pictureDates.length}
            <img src={images.carouselArrowsmallRight}
                 onClick={this.handleRightPicture.bind(this)}/>
          </div>
        </div>

        <div className='picture-background'>
          <div className='container'>


            <div className='col-xs-offset-1 col-xs-10 picture-carousel'>
              <img className='img col-xs-12 no-padding'
                   src={ pictureDates[this.state.pictureIndex].pictureSrc}/>

              <div className='carousel-arrowbg-position'>
                <img className='carousel-arrowbg-left'
                     src={images.carouselArrowbgLeft}
                     onClick={this.handleLeftPicture.bind(this)}/>
                <img src={images.carouselArrowbgRight}
                     onClick={this.handleRightPicture.bind(this)}/>
              </div>

            </div>

          </div>

        </div>
      </div>
    );
  }
}
