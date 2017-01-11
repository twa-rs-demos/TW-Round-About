import {Component} from 'react';

export default class PeopleVolunteer extends Component {

  render() {
    return (
      <div id='people-volunteer' className='col-xs-offset-3 col-xs-6'>
        <h2 className='middle-title people-h2-title'>以人为本，众人为爱</h2>
        <p className='middle-describe people-p'>加入众爱，一起公益。</p>
        <button className='button-style become-volunteer center-block'>加入志愿者行列</button>
      </div>
    );
  }
}
