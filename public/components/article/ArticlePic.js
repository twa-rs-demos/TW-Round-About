import React, {Component} from 'react';

export default class ArticlePic extends Component {

  render() {
    const src1='http://localhost/tw-ra/public/images/article/article_01.png';
    const src2='http://localhost/tw-ra/public/images/article/article_02.png';
    const src3='http://localhost/tw-ra/public/images/article/article_03.png';

    return (
      <div className="picture">
        <div className="bigger-img">
          <img src={this.props.img}/>
        </div>
        <div className="article-thumbnail row">
          <div className="col-xs-4 thumbnail-item"><img src={src1} onClick={this.props.changeData.bind(this,src1)}/></div>
          <div className="col-xs-4 thumbnail-item"><img src={src2} onClick={this.props.changeData.bind(this,src2)}/></div>
          <div className="col-xs-4 thumbnail-item"><img src={src3} onClick={this.props.changeData.bind(this,src3)}/></div>
        </div>
      </div>
    );
  }
}
