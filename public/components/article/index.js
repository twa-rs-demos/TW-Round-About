import {Component} from 'react';
import ArticleHead from './ArticleHead';
import ArticlePic from './ArticlePic';
import ArticleContent from './ArticleContent';
import ArticleFoot from './ArticleFoot';
import datas from './datas';
import data from './data';

export default class Artice extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articleData: data
    }
  }

  changeData(src) {
    let newData = datas.find((item)=>item.img === src);
    this.setState({
      articleData: newData
    });
  }

  render() {
    return (
      <div id="article">
        <div className="row">
          <div className="col-sm-offset-2 col-sm-8 col-xs-offset-1 col-xs-10 ">
            <ArticleHead title={this.state.articleData.title}/>
            <ArticlePic img={this.state.articleData.img} changeData={this.changeData.bind(this)}/>
            <ArticleContent content={this.state.articleData.content}/>
            <ArticleFoot/>
          </div>
        </div>
      </div>
    );
  }
}
