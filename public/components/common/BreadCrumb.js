import {Component} from 'react';

export default class BreadCrumb extends Component {
  render() {
    const liList = ['第一级', '第二级'];
    const lis = liList.map((item, index) => {
      return (
        <li key={index}>{item}</li>
      );
    });
    return (
      <div className='bread-crumb'>
        <ul className='breadcrumb'>
          {lis}
        </ul>
      </div>
    );
  }
}
