import React, {Component} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';


export default class MenuList extends Component {
  getMenuItemList(item) {
    return item.map((menuItem)=> {
      return <MenuItem value="捐赠" className="menu-item">{menuItem}</MenuItem>
    });
  }

  render() {
    const menuList = [{
      text: "捐赠",
      secondClass: ["nihao", "wohao", "dajiahao"]
    }, {
      text: "我们的工作",
      secondClass: ["nihao", "wohao", "dajiahao"]
    }, {
      text: "参与我们",
      secondClass: ["nihao", "wohao", "dajiahao"]
    }, {
      text: "众爱商店",
      secondClass: ["nihao", "wohao", "dajiahao"]
    }, {
      text: "新闻与活动中心",
      secondClass: ["nihao", "wohao", "dajiahao"]
    }, {
      text: "关于我们",
      secondClass: ["nihao", "wohao", "dajiahao"]
    }];

    const list = menuList.map((item)=> {
      return (
        <DropdownButton title={item.text} className="">
          {/*<option value="捐赠" className="col-md-2" selected={item.text}>{item.text}</option>*/}
          {this.getMenuItemList(item.secondClass)}
        </DropdownButton>
      );
    });

    return (
      <div className="col-md-8 padding">
        {list}
      </div>
    )
  }
}
