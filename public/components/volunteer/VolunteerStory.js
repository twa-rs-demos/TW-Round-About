import {Component} from 'react';
import chunk from 'lodash/chunk';

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

    return (
      <div>
        <h2 className='middle-title'>志愿者故事</h2>
        <div className='container'>
          {this.getVolunteerStorysRow(storyList)}
        </div>
      </div>
    );
  }

  getVolunteerStorysRow(storyList) {
    return chunk(storyList, 4).map((item, index) => {
      return (
        <div className='row' key={index}>
          {this.getstoryCols(item)}
        </div>
      );
    });
  }

  getstoryCols(projectCols) {
    return projectCols.map((item,index) => {
      return (
        <div className='col-md-3 donating-project' key={index}>
          <img src={item.src}/>
          <h4>{item.name}‘s Story</h4>
          <a href='#'>Read More ></a>
        </div>
      );
    });
  }
}
