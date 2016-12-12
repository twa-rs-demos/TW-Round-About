import React, {Component} from 'react';
import {BreadCrumb,DonatingProjects} from '../common/index';
export default class DonateCurrentAppeal extends Component {
  render() {
    return (
      <div>
        <BreadCrumb/>
        <DonatingProjects/>
      </div>
    )
  }
}
