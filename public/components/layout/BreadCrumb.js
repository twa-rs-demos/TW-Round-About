import React, {Component} from 'react';

export default class BreadCrumb extends Component {
  render() {
    return (<div>
      {this.props.breadCrumb[0].text}>{this.props.breadCrumb[1].text}
    </div>);
  }
}
