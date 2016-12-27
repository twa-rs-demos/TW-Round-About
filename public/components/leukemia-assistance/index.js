import {Component} from 'react';
import PictureMax from './PictureMax';
import ContentStatic from './StaticContent';
import '../../style/ourWorkAssistance.less';

export default class ourWorkPage extends Component {
  render() {
    return (
      <div id='ourwork-assistance'>
        <PictureMax/>
        <ContentStatic/>
      </div>
    );
  }
}
