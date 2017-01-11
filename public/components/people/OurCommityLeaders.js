import {Component} from 'react';

const volunteerPictures = [
  {
    src: 'http://localhost/tw-ra/public/images/people/volunteerPicture.png'
  },
  {
    src: 'http://localhost/tw-ra/public/images/people/volunteerPicture.png'
  },
  {
    src: 'http://localhost/tw-ra/public/images/people/volunteerPicture.png'
  }
];

export default class OurCommityLeaders extends Component {

  render() {

    const commityLeaders = volunteerPictures.map((volunteerPicture, index)=> {
      return (
        <div className='col-md-4 col-xs-12 commity-leader' key={index}>
          <img className='center-block' src={volunteerPicture.src}/>
        </div>
      )
    });

    return (
      <div id='ourCommityLeaders' className='col-md-offset-3 col-md-6 col-xs-offset-3 col-xs-6'>
        <h3 className='middle-title title-h3'>我们的志愿者领队</h3>
        <div className='row'>
          {commityLeaders}
        </div>
      </div>
    );
  }
}
