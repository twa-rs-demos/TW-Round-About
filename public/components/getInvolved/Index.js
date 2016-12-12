import React, {Component} from 'react';
import PictureMax from './PictureMax';
import StaticContent from './StaticContent';
import '../../style/getInvolved.css';

export  default  class getInvolved extends Component {
  render() {
    return (
      <div>
        <PictureMax/>
        <StaticContent/>
      </div>
    )
  }
}
