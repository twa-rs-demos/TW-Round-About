import React,{Component} from 'react';

export default class media extends  Component{
  render(){
    return (
      <div className="show-video">
        <embed src="http://www.iqiyi" width="620" height="400" className="video" autostart="true/false" loop="true/false"></embed>
      </div>
    )
  }
}
