import {Component} from 'react';

export default class Content extends Component {

  render() {
    return (
      <div className='row'>
        <div className='col-xs-offset-2 col-xs-8' id='aboutUs-content'>
          <h3 className='middle-title aboutUs-title'>众爱都做些什么？</h3>
          <p className='aboutUs-describe'>
            RoundAbout is a social enterprise headed by volunteers.We provide a free service connecting those who wishes
            to give.be that monetary or otherwise,to those in need.Started in 2008,we were the first charity.
          </p>
          <h3 className='middle-title aboutUs-title'>众爱是怎么开始的？</h3>
          <p className='aboutUs-describe'>
            RoundAbout is a social enterprise headed by volunteers.We provide a free service connecting those who wishes
            to give.be that monetary or otherwise,to those in need.Started in 2008,we were the first charity.
          </p>
        </div>
      </div>
    );
  }
}
