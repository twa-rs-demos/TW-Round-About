import {Component} from 'react';
import {DonatingProjects} from '../common/index';

export default class DonateCurrentAppeal extends Component {
  render() {
    return (
      <div>
        <DonatingProjects title='正在捐款的项目'/>
      </div>
    );
  }
}
