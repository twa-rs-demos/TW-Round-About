import React, {Component} from "react";
import RightTopinfo from "./RightTopinfo";
import MenuList   from "./MenuList";
import OurWorkItems from "./OurWorkItems";
import ApplyMonthly from "./ApplyMonthly";
import Footer from "./Footer";
import Media from './Media';

class Home extends Component {
  render() {
    return (<div >
      <RightTopinfo/>
      <MenuList/>
      <div>
        <a href="#" className="middle-image"></a>
      </div>

      <div className="middle-text">
        <p> 我们是众爱</p>
        <span> 众爱是连接捐款人与受助人的桥梁</span>
      </div>
      <Media />
      <div className="middle-text introduction">
        <p> 我们的工作</p>
        <span> 众爱在全种食品范围内支持个人救助的同时也与其它慈善机构u合作救助</span>
      </div>

      <OurWorkItems/>
      <ApplyMonthly/>
      <Footer/>
    </div>)
  }
}
export default Home;

