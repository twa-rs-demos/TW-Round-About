import {Component} from 'react';

export default class PublicResource extends Component {
  render() {
    return (<div>
      <div className='public-resource row'>
        <h2 className='middle-title'>共享资源</h2>
        <p>Roundabout is a social enterprise headed by volunteers. We provide a free service
          connecting those who wish
          to give, be that monetary or otherwise, to those in need. Started in 2008, we </p>
      </div>
      <div className='search-box row'>
        <div className='col-sm-offset-4 col-sm-4 no-padding search-box-container'>
          <input type="text"/>
          <button>
            <img src="http://localhost/tw-ra/public/images/home/icon_search_small_focused.png" alt=""/>
          </button>
        </div>
        <div className='col-sm-offset-4 col-sm-4 no-padding search-type'>高级搜索 ></div>
      </div>
      <div className="provide-and-question row">
        <div className="col-sm-6 col-xs-12 provide">
          <div className="title">提供</div>
          <div className="provided-types">
            <div className="col-xs-6">
              <button>Items</button>
            </div>
            <div className="col-xs-6">
              <button>Skills & Expertise</button>
            </div>
            <div className="col-xs-6">
              <button>Time</button>
            </div>
            <div className="col-xs-6">
              <button>Other</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xs-12 question">
          <div className="title">提问</div>
          <div className="provided-types">
            <div className="col-xs-6">
              <button>Items</button>
            </div>
            <div className="col-xs-6">
              <button>Skills & Expertise</button>
            </div>
            <div className="col-xs-6">
              <button>Time</button>
            </div>
            <div className="col-xs-6">
              <button>Other</button>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}
