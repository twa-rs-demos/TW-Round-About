import {Component} from 'react';

export default class VolunteerStory extends Component {
  render() {
    const storyList = [
      {name: 'Mr Raj', src: 'http://localhost/tw-ra/public/images/getInvolvedVolunteer/volunteer story01.png'},
      {name: 'Bettina', src: 'http://localhost/tw-ra/public/images/getInvolvedVolunteer/volunteer story02.png'},
      {name: 'Michael', src: 'http://localhost/tw-ra/public/images/getInvolvedVolunteer/volunteer story03.png'},
      {name: 'Friederike', src: 'http://localhost/tw-ra/public/images/getInvolvedVolunteer/volunteer story04.png'},
      {name: 'Mr Raj', src: 'http://localhost/tw-ra/public/images/getInvolvedVolunteer/volunteer story01.png'},
      {name: 'Bettina', src: 'http://localhost/tw-ra/public/images/getInvolvedVolunteer/volunteer story02.png'},
      {name: 'Michael', src: 'http://localhost/tw-ra/public/images/getInvolvedVolunteer/volunteer story03.png'},
      {name: 'Friederike', src: 'http://localhost/tw-ra/public/images/getInvolvedVolunteer/volunteer story04.png'}
    ];

    const stories = storyList.map((item, index) => {
      return <div key={index} className='col-md-3 col-sm-4 col-xs-6 no-padding story-item'>
        <img src={item.src} className='story-picture'/>
        <p>{item.name}’s Story</p>
        <a href='#'>Read More ></a>
      </div>;
    });
    return (
      <div className='volunteer-stories'>
        <h2 className='middle-title'>{this.props.title}</h2>
        <div className='row text-center'>
          {stories}
        </div>
      </div>
    );
  }
}
