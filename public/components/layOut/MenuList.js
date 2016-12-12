import React, {Component} from 'react';
import {NavDropdown, MenuItem} from 'react-bootstrap';
import request from 'superagent';
import noCache from 'superagent-no-cache';


export default class MenuList extends Component {
  // constructor(){
  //   this.state = {
  //     menuList:[]
  //   }
  // }
  componentDidMount() {
    request.get('http://127.0.0.1/wp-json/wp/v2/pages/34')
      .end((err, res)=> {
        if (err) {
          alert(err);
        }
        console.log(res.body);
        // this.state.menuList = res;
      });
  }

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
        <NavDropdown title={item.text} className="" eventKey="1">
          {this.getMenuItemList(item.secondClass)}
        </NavDropdown>
      );
    });

    return (
      <div className="col-md-9 padding menu">
        {list}
      </div>
    )
  }
}
