import React, {Component} from 'react';
import BreadCrumb from '../common/BreadCrumb';

export  default  class OurWorkPageHeader extends Component {
  render() {
    return (
      <div>
        <BreadCrumb/>
        <div className="Leukemia-rescue-image">
          <div className="patient-profile">
            <p>Yang bin is a 9 year old boy from Xi’an.</p>
            <p>He was diagnosed with leukemia in 2015</p>
            <p>The dignity of our recipients is something</p>


          </div>
          <button className="child-story-btn">阅读杨斌的故事</button>
        </div>

        <div>
          <button className="more-story">
            <img src="./public/images/ourWork/button_more stories_default.png"/>
          </button>
        </div>
      </div>
    )
  }

}
