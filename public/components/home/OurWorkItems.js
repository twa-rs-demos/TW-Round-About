import React, {Component} from 'react';

export default class OurWorkItems extends Component {
  render() {
    return (<div>
      <div className="middle-text">
        <p> 我们的工作</p>
        <span> 众爱在全种食品范围内支持个人救助的同时也与其它慈善机构合作救助</span>
      </div>
      <div className="job-icons col-sm-offset-2">
        <div className="col-md-1 icon-container a-work-icon">
          <img src="./public/images/a-work-icon.png" alt="白血病救助"/>
          <span className="">白血病救助</span>
        </div>
        <div className="col-md-1 icon-container b-work-icon">
          <img src="./public/images/b-work-icon.png" alt="白血病救助"/>
          <span className="">医疗救助</span>
        </div>
        <div className="col-md-1 icon-container c-work-icon">
          <img src="./public/images/c-work-icon.png" alt="白血病救助"/>
          <span className="">教育资助</span>
        </div>
        <div className="col-md-1 icon-container d-work-icon">
          <img src="./public/images/d-work-icon.png" alt="白血病救助"/>
          <span className="" id="">灾区救助</span>
        </div>
        <div className="col-md-1 icon-container e-work-icon">
          <img src="./public/images/e-work-icon.png" alt="白血病救助"/>
          <span className="" id="">社区帮扶</span>
        </div>

        <div className="konw-more">
          <span className="konw-more-text">了解更多 ></span>
        </div>
      </div>
    </div>);
  }
}
