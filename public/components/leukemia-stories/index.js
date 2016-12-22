import {Component} from 'react';
import {BreadCrumb,DonatingProjects} from '../common/index';


export default class LeukemiaStories extends Component {

  render() {
    return (
      <div>
        <BreadCrumb/>
        <DonatingProjects title="白血病故事"/>
      </div>
    );
  }
}
