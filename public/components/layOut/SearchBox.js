import React,{Component} from 'react';

export default class SearchBox extends Component{
  render(){
    return (<div className="col-sm-3 no-padding">
      <div className="col-sm-offset-4 search">
        <input type="text" placeholder="搜索本站"/>
        <a href="#"><img src="./public/images/home/icon_search_small_focused.png" alt="search"/></a>
      </div>
    </div>);
  }
}
