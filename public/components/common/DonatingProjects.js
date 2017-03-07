import {Component} from 'react';
import {Link} from 'react-router';
import Pagination from './Pagination';
import donatingProjectList from './donateingProjectsDates';
import superagent from 'superagent';
import noCache from 'superagent-no-cache';

export default class DonatingProjects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageCount: 8,
      childrenStories: []
    };
  }

  componentDidMount() {
    superagent
      .get('/wp-json/wp/v2/posts?filter[tag]=childrenStory')
      .use(noCache)
      .end((err, res)=> {
        if (err) {
          throw err;
        }
        this.setState({
          childrenStories: res.body
        });

      })

  }

  getDonatingProject() {
    return this.state.childrenStories.map((item, index) => {
      return (
        <div className='col-md-3 col-sm-4 col-xs-6 donating-project' key={index}>
          <img src={item.acf.img.url}/>
          <div className='child-profile'>
            <p>这里是简介哦-。-！已经测试过长度的问题，不会越界的，放心哦^0^</p>
          </div>
          <div className='child-profile-text'>
            <h4>{item.acf.name}，{item.acf.age}岁</h4>
            <p>{item.acf.name}</p>
            <p>需要&nbsp;￥{item.acf.age}万</p>
            <p className="pink">
              <Link to={{pathname:"/tw-ra/childstories",query:{id:item.id}}}>阅读更多 ></Link>
            </p>

          </div>
        </div>
      );
    });
  }

  handlePageChange(page) {
    //此处发请求

  }

  render() {
    const totalPage = Math.ceil(donatingProjectList.length / this.state.pageCount);
    let more = null;
    if (this.props.paginationMoreLink !== undefined) {
      more = (<div className='col-md-7 col-sm-6 col-xs-5'>
        <div className='text-right'>
          <Link to={this.props.paginationMoreLink}>
            <div className='donateProject-more'>更多></div>
          </Link>
        </div>
      </div>);
    }

    return (
      <div className='donating-projects'>
        <div className='donating-middle-text'>
          <h2 className='middle-title'>{this.props.title}</h2>
        </div>
        <div className="row">
          <div className="col-md-offset-1 col-md-10">
            {this.getDonatingProject(donatingProjectList.slice(this.state.currentPage, this.state.currentPage + 9))}
          </div>
        </div>
        <div className='row' id='pagination-project'>
          <div className='col-md-offset-1 col-md-3 col-sm-5 col-xs-6 '>
            <Pagination totalPage={totalPage} currentPage={this.state.currentPage}
                        onPageChange={this.handlePageChange.bind(this)}/>
          </div>
          {more}
        </div>
      </div>
    );
  }
}
