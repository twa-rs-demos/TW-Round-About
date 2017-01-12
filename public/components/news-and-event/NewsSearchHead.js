import {Component} from 'react';

export default class NewsSearchHead extends Component {
  render() {
    return (
      <div className='container news-event-title'>
        <h2 className='middle-title'>众爱新闻</h2>
        <div className='news_event_category row'>
          <div className='col-md-offset-1 col-md-10'>
            <div className='col-md-3 col-md-offset-1 margin-top col-xs-12'>
              <input placeholder='搜索新闻'/>
            </div>
            <div className='col-md-2 col-xs-4 margin-top'>
              <button>募款</button>
            </div>
            <div className='col-md-2 col-xs-4 margin-top'>
              <button>书市</button>
            </div>
            <div className='col-md-2 col-xs-4 margin-top'>
              <button>活动</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
