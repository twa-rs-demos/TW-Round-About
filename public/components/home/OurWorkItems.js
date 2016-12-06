import React, {Component} from 'react';

export  default  class ourWorkItems extends Component {
  render() {
    return (
      <div className="jods-icons row">
        <div className="col-md-1"></div>
        <a href="#" className="col-md-1">
          <img src="./public/images/a-work-icon.png" alt="白血病救助"/>
          <span className="jod-text">白血病救助</span>
        </a>
        <a href="#" className="col-md-1">
          <img src="./public/images/b-work-icon.png" alt="白血病救助"/><span className="jod-text">医疗救助</span>
        </a>
        <a href="#" className="col-md-1">
          <img src="./public/images/c-work-icon.png" alt="白血病救助"/><span className="jod-text">教育资助</span>
        </a>
        <a href="#" className="col-md-1">
          <img src="./public/images/d-work-icon.png" alt="白血病救助"/><span className="jod-text"
                                                                        id="disater-rescue-text">灾区救助</span>
        </a>
        <a href="#" className="col-md-1 ">
          <img src="./public/images/e-work-icon.png" alt="白血病救助"/><span className="jod-text"
                                                                        id="community-rescue-text">社区帮扶</span>
        </a>

        <div className="konw-more">
          <span className="konw-more-text">了解更多 ></span>
        </div>
      </div>
    )
  }
}
