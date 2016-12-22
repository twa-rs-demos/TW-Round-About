import {Component} from 'react';
import {BreadCrumb, DonatingProjects} from '../common/index';

export default class DonateCurrentAppeal extends Component {
  render() {
    return (
      <div>
        <BreadCrumb/>
        <DonatingProjects title='正在捐款的项目'/>
      </div>
    );
  }
}
