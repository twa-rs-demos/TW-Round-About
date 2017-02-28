import {Component} from "react";
import pictureDates from "./pictureData";

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

            <img src='http://localhost/tw-ra/public/images/gallery/carousel_arrowsmall_left.png'
                 onClick={this.handleLeftPicture.bind(this)}/>
            {this.state.pictureIndex + 1} / {pictureDates.length}
            <img src='http://localhost/tw-ra/public/images/gallery/carousel_arrowsmall_right.png'
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
                     src='http://localhost/tw-ra/public/images/gallery/carousel_arrowbg_left.png'
                     onClick={this.handleLeftPicture.bind(this)}/>
                <img src='http://localhost/tw-ra/public/images/gallery/carousel_arrowbg_right.png'
                     onClick={this.handleRightPicture.bind(this)}/>
              </div>

            </div>

          </div>

        </div>
      </div>
    );
  }
}
