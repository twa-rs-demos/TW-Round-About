import React, {Component} from 'react';
import chunk from "lodash/chunk";

export default class DonatingProjects extends Component {
  render() {
    const donatingProjectList = [
      {img: './public/images/donate/current appeals01.png', name: '程程', age: '8', disease: '白血病', money: '20,000'},
      {img: './public/images/donate/current appeals02.png', name: '程程', age: '8', disease: '白血病', money: '20,000'},
      {img: './public/images/donate/current appeals03.png', name: '程程', age: '8', disease: '白血病', money: '20,000'},
      {img: './public/images/donate/current appeals01.png', name: '程程', age: '8', disease: '白血病', money: '20,000'},
      {img: './public/images/donate/current appeals02.png', name: '程程', age: '8', disease: '白血病', money: '20,000'},
      {img: './public/images/donate/current appeals03.png', name: '程程', age: '8', disease: '白血病', money: '20,000'},
      {img: './public/images/donate/current appeals01.png', name: '程程', age: '8', disease: '白血病', money: '20,000'},
    ];
    return (
      <div className="donating-projects">
        <h2 className="donate-way-title">正在捐款的项目</h2>
        <div className="container">
          {this._getDonatingProjectsRow(donatingProjectList)}
        </div>
      </div>
    )
  }

  _getDonatingProjectsRow(donatingProjectList) {
    return chunk(donatingProjectList, 4).map((item)=>{
      return (
        <div className="row">
          {this._getDonatingProjectsCols(item)}
        </div>
      )
    })
  }

  _getDonatingProjectsCols(projectCols) {
    return projectCols.map((item)=> {
      return (
        <div className="col-md-3 donating-project">
          <img src={item.img} />
          <h4>{item.name}，{item.age}岁</h4>
          <div>
            <p>{item.disease}</p>
            <p>需要&nbsp;￥{item.money}</p>
          </div>
          <a href="#">阅读更多 ></a>
        </div>
      )
    });
  }
}

