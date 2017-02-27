import React, {Component} from 'react';

export default class BookFairNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: this.props.data
    };
  }

  getRow(datas){
    return datas.map((item,index)=> {
      return (
        <div className='row margin-bottom' key={index}>
          <div className='col-xs-4'>
            <img src={item.img}/>
          </div>
          <div className='col-xs-8 words'>
            <div>
              <h4 className="news-title">{item.title}</h4>
              <p className="news-time">Published on:{item.time}</p>
            </div>
            <div>
              <p className="news-content css-wrap">{item.content}</p>
            </div>
            <div className="learn-more">
              <p>Learn More > </p>
            </div>
          </div>
        </div>
      )
    });
  }

  render() {
    let datas = this.state.news;
    return (
      <div className="bookfair-news">
        {this.getRow(datas)}
      </div>
    );
  }
}
