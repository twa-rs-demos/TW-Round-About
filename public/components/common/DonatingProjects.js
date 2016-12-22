import {Component} from 'react';
import chunk from 'lodash/chunk';
import {Link} from 'react-router';

export default class DonatingProjects extends Component {
  render() {
    const donatingProjectList = [
      {img: './public/images/donate/current appeals01.png', name: '程程', age: '8', disease: '白血病', money: '20,000'},
      {img: './public/images/donate/current appeals02.png', name: '程程', age: '8', disease: '白血病', money: '20,000'},
      {img: './public/images/donate/current appeals03.png', name: '程程', age: '8', disease: '白血病', money: '20,000'},
      {img: './public/images/donate/current appeals01.png', name: '程程', age: '8', disease: '白血病', money: '20,000'},
      {img: './public/images/donate/current appeals02.png', name: '程程', age: '8', disease: '白血病', money: '20,000'},
      {img: './public/images/donate/current appeals03.png', name: '程程', age: '8', disease: '白血病', money: '20,000'},
      {img: './public/images/donate/current appeals01.png', name: '程程', age: '8', disease: '白血病', money: '20,000'}
    ];
    return (
      <div className='donating-projects donate-page-index'>
        <h2 className='donate-way-title'>{this.props.title}</h2>
        <div className='container'>
          {this.getDonatingProjectsRow(donatingProjectList)}
        </div>
      </div>
    );
  }

  getDonatingProjectsRow(donatingProjectList) {
    return chunk(donatingProjectList, 4).map((item, index) => {
      return (
        <div className='row' key={index}>
          {this.getDonatingProjectsCols(item)}
        </div>
      );
    });
  }

  getDonatingProjectsCols(projectCols) {
    return projectCols.map((item, index) => {
      return (
        <div className='col-md-3 donating-project' key={index}>
          <img src={item.img}/>
          <div className='child-profile'>
            <p>这里是简介哦-。-！已经测试过长度的问题，不会越界的，放心哦^0^</p>
          </div>
          <h4>{item.name}，{item.age}岁</h4>
          <div>
            <p>{item.disease}</p>
            <p>需要&nbsp;￥{item.money}</p>
          </div>
          <Link to='/tw-ra/childStory'>阅读更多 ></Link>
        </div>
      );
    });
  }
}

