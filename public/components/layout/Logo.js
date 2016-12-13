import React, {Component} from 'react';
import {Link} from 'react-router';

export default  class Logo extends Component {

  render() {
    return (
      <div className="row logo">
        <Link to="/tw-ra/"> <img src="./public/images/home/index_logo1.png" alt="logo"/></Link>
      </div>
    )
  }
}
