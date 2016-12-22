import {Component} from 'react';
import {BreadCrumb} from '../common/index';
import PictureMax from './PictureMax';
import ContentStatic from './StaticContent';
import '../../style/ourWorkAssistance.css';

export default class ourWorkPage extends Component {
  render() {
    return (
      <div>
        <BreadCrumb/>
        <PictureMax/>
        <ContentStatic/>
      </div>
    );
  }
}
