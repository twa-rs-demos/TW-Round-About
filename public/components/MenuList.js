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
      text:"分类1",
      secondClass:["nihao","wohao","dajiahao"]
    },{
      text:"分类2",
      secondClass:["nihao","wohao","dajiahao"]
    },{
      text:"分类3",
      secondClass:["nihao","wohao","dajiahao"]
    },{
      text:"分类4",
      secondClass:["nihao","wohao","dajiahao"]
    }];

    const list = menuList.map((item)=>{
      return (
        <select className="">
          <option value="捐赠" selected={item.text}>{item.text}</option>
          {this.getMenuItemList(item.secondClass)}
        </select>
      );
    });

    return (
      <div>
        {list}
      </div>
    )
  }
}
