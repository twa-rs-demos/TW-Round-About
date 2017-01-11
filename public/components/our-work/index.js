import {Component} from 'react';
import Video from './Video';
import OurWorkItems from './OurWorkItems';

export default class OurWork extends Component {
  render() {
    return (
      <div id='ourwork'>
        <Video/>
        <OurWorkItems/>
      </div>
    );
  }
}
