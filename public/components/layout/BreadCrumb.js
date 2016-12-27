import React, {Component} from 'react';

export default class BreadCrumb extends Component {

  render() {
    const breadcrumb = this.props.breadCrumb;
    return (
      <div >
        {breadcrumb.length === 0 ? '' : `${breadcrumb[0].text}>${breadcrumb[1].text}`}
      </div>);
  }
}
