import React, {Component} from 'react';
import '../../style/breadcrumb.less';

export default class BreadCrumb extends Component {

  render() {
    const breadcrumb = this.props.breadCrumb;
    let list = '';
    if (breadcrumb.length != 0) {
      list = breadcrumb.map((item, index)=> {
          return <li key={index}>{item.text}</li>
        }
      )
    }
    const isHidden = list === '' ? 'hidden' : '';
    return (
      <ol id='breadcrumb' className={'breadcrumb ' + isHidden}>
        {list}
      </ol>
    );
  }
}
