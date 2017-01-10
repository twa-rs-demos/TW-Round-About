import {Component} from 'react';
import {Link} from 'react-router';
import Pagination from './Pagination';
import donatingProjectList from './donateingProjectsDates';

export default class DonatingProjects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageCount: 8
    };
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

  handlePageChange(page) {
    console.log('hahhah');
    //此处发请求

  }

  render() {
    const totalPage = Math.ceil(donatingProjectList.length / this.state.pageCount);

    return (
      <div className='donating-projects'>
        <div className='donating-middle-text'>
          <h2 className='middle-title'>{this.props.title}</h2>
        </div>
        <div>
          {this.getDonatingProject(donatingProjectList.slice(this.state.currentPage, this.state.currentPage + 9))}
        </div>

        <div className='row' id='pagination-project'>
          <div className='col-md-3 col-sm-5 col-xs-6 '>
            <Pagination totalPage={totalPage} currentPage={this.state.currentPage}
                        onPageChange={this.handlePageChange.bind(this)}/>
          </div>
          <div className='col-md-8 col-sm-6 col-xs-5'>
            <div className='text-right'>
              <Link to='/tw-ra/donateCurrent'>
                <div className='donateProject-more'>更多></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

