import {Component} from 'react';
import chunk from 'lodash/chunk';
import {Link} from 'react-router';

export default class DonatingProjects extends Component {
  render() {
    const donatingProjectList = [
      {
        img: 'http://localhost/tw-ra/public/images/donate/current appeals01.png',
        name: '程程',
        age: '8',
        disease: '白血病',
        money: '20,000'
      },
      {
        img: 'http://localhost/tw-ra/public/images/donate/current appeals02.png',
        name: '程程',
        age: '8',
        disease: '白血病',
        money: '20,000'
      },
      {
        img: 'http://localhost/tw-ra/public/images/donate/current appeals03.png',
        name: '程程',
        age: '8',
        disease: '白血病',
        money: '20,000'
      },
      {
        img: 'http://localhost/tw-ra/public/images/donate/current appeals01.png',
        name: '程程',
        age: '8',
        disease: '白血病',
        money: '20,000'
      },
      {
        img: 'http://localhost/tw-ra/public/images/donate/current appeals02.png',
        name: '程程',
        age: '8',
        disease: '白血病',
        money: '20,000'
      },
      {
        img: 'http://localhost/tw-ra/public/images/donate/current appeals03.png',
        name: '程程',
        age: '8',
        disease: '白血病',
        money: '20,000'
      },
      {
        img: 'http://localhost/tw-ra/public/images/donate/current appeals01.png',
        name: '程程',
        age: '8',
        disease: '白血病',
        money: '20,000'
      }
    ];
    return (
      <div className='donating-projects'>
        <div className='donating-middle-text'>
          <h2 className='middle-title'>{this.props.title}</h2>
        </div>
        <div className="row">
          {this.getDonatingProject(donatingProjectList)}
        </div>
      </div>
    );
  }

  getDonatingProject(lists) {
    return lists.map((item, index) => {
      return (
        <div className='col-md-3 col-sm-4 col-xs-6 donating-project' key={index}>
          <img src={item.img}/>
          <div className='child-profile'>
            <p>这里是简介哦-。-！已经测试过长度的问题，不会越界的，放心哦^0^</p>
          </div>
          <div className='child-profile-text'>
            <h4>{item.name}，{item.age}岁</h4>
            <p>{item.disease}</p>
            <p>需要&nbsp;￥{item.money}</p>
            <Link to='/tw-ra/childStory'>阅读更多 ></Link>
          </div>
        </div>
      );
    });
  }
}

