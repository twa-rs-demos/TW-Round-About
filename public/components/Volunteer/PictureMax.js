import {Component} from 'react';

export default class PictureMax extends Component {
  render() {
    const pictureSrc = './public/images/getInvolvedVolunteer/hero_volunteer.png';
    return (
      <div className='picture-max'>
        <img src={pictureSrc}/>
      </div>
    );
  }
}
