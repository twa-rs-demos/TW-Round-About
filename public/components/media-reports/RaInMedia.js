import React, {Component} from 'react';
import mediaData from './mediaData';

export default class RaInMedia extends Component {

  getCol(datas) {
    return datas.map((item, index)=> {
      return (
        <div className="col-md-4 col-sm-6 meida-item" key={index}>
          <div className="media-img">
            <img src={item.img}/>
          </div>
          <div className="media-words">
            <h4 className="media-title pink">{item.title}</h4>
            <p>{item.describe}</p>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="ra-in-media container">
        <div >
          <h2 className="middle-title">媒体眼中的众爱</h2>
        </div>
        <div className="row media-data-content">
          <div className="col-md-offset-2 col-md-8">
            {this.getCol(mediaData)}
          </div>
        </div>

      </div>
    );
  }
}
