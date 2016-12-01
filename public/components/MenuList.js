import React, {Component} from 'react';

const my = 0;

export default class munu extends Component{
  getMenuItemList(item){
    const a = item.map((menuItem)=>{
      return <option value="捐赠">{menuItem}</option>
    });
    return a;
  }

  render(){
    const menuList = [{
      text:"捐赠",
      secondClass:["nihao","wohao","dajiahao"]
    },{
      text:"我们的工作",
      secondClass:["nihao","wohao","dajiahao"]
    },{
      text:"参与我们",
      secondClass:["nihao","wohao","dajiahao"]
    },{
      text:"众爱商店",
      secondClass:["nihao","wohao","dajiahao"]
    },{
      text:"新闻与活动中心",
      secondClass:["nihao","wohao","dajiahao"]
    },{
      text:"关于我们",
      secondClass:["nihao","wohao","dajiahao"]
    }];

    const list = menuList.map((item)=>{
      return (
        <select className="">
          <option value="捐赠" className="col-md-2" selected={item.text}>{item.text}</option>
          {this.getMenuItemList(item.secondClass)}
        </select>
      );
    });

    return (
      <div className="row">
        {list}
      </div>
    )
  }
}
