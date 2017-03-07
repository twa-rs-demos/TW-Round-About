import {Component} from 'react';

export default class FormConact extends Component {
  render() {
    const list = [
      {text: 'In ENGLISH', star: true},
      {text: 'In CHINESE', star: false},
      {text: 'Email Address', star: true},
      {text: 'Home Phone', star: false},
      {text: 'Mobile Number', star: true}
    ];

    let tab = list.map((item,index) => {
      let name = null;
      if (item.start) {
        name = (<span className='pink'>*</span>);
      }
      return (<div className='row' key={index}>
          <div className='col-md-2'>
            <p className='input-address-text'>
              {item.text}{name}
            </p>
          </div>
          <div className='col-md-10'>
            <input type='text'/>
          </div>
        </div>
      );
    });

    return (
      <div className='content'>
        <h3>Address that you would like your donations picked up from:</h3>
        {tab}
      </div>
    );
  }
}
