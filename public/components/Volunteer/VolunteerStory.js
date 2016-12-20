import React, {Component} from 'react';
import chunk from "lodash/chunk";

export default class VolunteerStory extends Component {
  render() {
    const storyList = [
      {name: 'Mr Raj', src: './public/images/getInvolvedVolunteer/volunteer story01.png'},
      {name: 'Bettina', src: './public/images/getInvolvedVolunteer/volunteer story02.png'},
      {name: 'Michael', src: './public/images/getInvolvedVolunteer/volunteer story03.png'},
      {name: 'Friederike', src: './public/images/getInvolvedVolunteer/volunteer story04.png'},
      {name: 'Mr Raj', src: './public/images/getInvolvedVolunteer/volunteer story01.png'},
      {name: 'Bettina', src: './public/images/getInvolvedVolunteer/volunteer story02.png'},
      {name: 'Michael', src: './public/images/getInvolvedVolunteer/volunteer story03.png'},
      {name: 'Friederike', src: './public/images/getInvolvedVolunteer/volunteer story04.png'},
    ];

    return (
      <div className="involved-volunteer-stores donate-page-index donating-projects ">
        <h2 className="donate-way-title">志愿者故事</h2>
        <div className="container">
          {this.getVolunteerStorysRow(storyList)}
        </div>
      </div>
    )
  }

  getVolunteerStorysRow(storyList) {
    return chunk(storyList, 4).map((item)=> {
      return (
        <div className="row">
          {this.getstoryCols(item)}
        </div>
      )
    })
  }

  getstoryCols(projectCols) {
    return projectCols.map((item)=> {
      return (
        <div className="col-md-3 donating-project">
          <img src={item.src} />
            <h4>{item.name}‘s Story</h4>
            <a href="#">Read More ></a>
        </div>
      )
    });
  }
}
