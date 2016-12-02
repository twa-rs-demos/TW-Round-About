import  React, {Component} from 'react';
import  OurWorkPageHeader from './OurWorkAssistanceHeader';
import ApplyMonthly from './ApplyMonthly';
import MenuList from './MenuList';
import Footer from './Footer';
import RightTopinfo from './RightTopinfo';


export  default  class ourWorkPage extends Component {
  render() {
    return (
      <div>
        <RightTopinfo />
        <MenuList />

        <OurWorkPageHeader/>

        <div className="save-life-situation">
          <h1>我们参与挽救的生命</h1>
          <div className="Rescue-situation-img">
            <img src="./public/images/ourWork/lives helped.png"/>
            <img src="./public/images/ourWork/raised.png"/>
          </div>
          <button className="participate-rescue">参与挽救一个生命</button>
        </div>

        <div className="fact-situation">
          <h1>你知道吗？</h1>
          <p>理论上，中国的儿童白血病的治愈率超过<span>70%</span>。但是只有<span>20%</span>的孩子能活下来。</p>
          <p>影响治愈率的是缺乏的<span>资金</span>。</p>
          <span> 你可以改变他们的命运。</span>

          <div className="fact-situation-graph">
            <img src="./public/images/ourWork/cure rate.png"/>
            <button className="want-donate">我要捐赠</button>
          </div>
        </div>

        <ApplyMonthly/>
        <Footer/>
      </div>

    )
  }

}
