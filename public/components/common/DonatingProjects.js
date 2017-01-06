import {Component} from 'react';
import chunk from 'lodash/chunk';
import {Link} from 'react-router';
import donatingProjectList from './donateingProjectsDates';

export default class DonatingProjects extends Component {
  render() {

    return (
      <div className='donating-projects'>
        <div className='donating-middle-text'>
          <h2 className='middle-title'>{this.props.title}</h2>
        </div>
        <div>
          {this.getDonatingProjectsRow(donatingProjectList)}
        </div>

        <span>这里还需要一个翻页器组件</span>
        <Link to='/tw-ra/donateCurrent'><p className='text-right'>更多</p></Link>
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

