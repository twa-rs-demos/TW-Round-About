import {Component} from 'react';
import PictureMax from './PictureMax';
import ContentStatic from './StaticContent';
import '../../style/ourWorkAssistance.css';

export default class ourWorkPage extends Component {
  render() {
    return (
      <div>
        <PictureMax/>
        <ContentStatic/>
      </div>
    );
  }
}
