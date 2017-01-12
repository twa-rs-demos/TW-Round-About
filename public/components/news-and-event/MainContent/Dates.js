import {Component} from 'react';

export default class Dates extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dates: this.props.data
    };
  }

  render() {
    let firstDate = this.state.dates.firstDate;
    let secondDate = this.state.dates.secondDate;
    return (
      <div id='date-list' className='row'>
        <div className='col-md-12 col-xs-6 margin-bottom '>
          <div className='row'>
            <div className='col-xs-2 no-padding'>
              <div className='box-border'>
                <div className='num-box'>{firstDate.num}</div>
              </div>
            </div>
            <div className='col-xs-10'>
              <h4>{firstDate.date}<br />
                {firstDate.time}</h4>
            </div>
          </div>
        </div>
        <div className='col-md-12 col-xs-6 margin-bottom'>
          <div className='row'>
            <div className='col-xs-2 no-padding'>
              <div className='box-border'>
                <div className='num-box'>{secondDate.num}</div>
              </div>
            </div>
            <div className='col-xs-10'>
              <h4>{secondDate.date}<br />
                {secondDate.time}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
