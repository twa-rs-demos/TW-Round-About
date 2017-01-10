import {Component} from 'react';
import CommonAxis from './CommonAxis';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: false
    };
  }

  showEvents2009() {
    this.setState({
      events: !this.state.events
    });
  }

  render() {
    return (
      <div id='aboutUs-footer'>
        <h3 className='middle-title aboutUs-event'>众爱大事记</h3>
        <div className='container aboutUs-container'>
          <div className='row'>
            <div className='col-md-offset-1 col-md-1  col-xs-offset-1 col-xs-1 no-padding-right'>
              <div className='time-line'></div>
            </div>
            <CommonAxis year='2008'/>
            <CommonAxis year='2009' everyYearEvents={this.showEvents2009.bind(this)}/>
            <CommonAxis year='2010'/>
            <CommonAxis year='2011'/>
            <CommonAxis year='2012'/>
            <CommonAxis year='2013'/>
            <CommonAxis year='2014'/>
            <CommonAxis year='2015'/>
            <CommonAxis year='2016'/>

            <div className='col-md-1 col-xs-1 no-padding'>
              <i className='fa fa-chevron-right circle chevron'> </i>
            </div>
          </div>
          <div className='col-xs-offset-3 col-xs-1 no-padding'>
            <div className={this.state.events ? '' : 'hidden'}>
              <Events/>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

class Events extends Component {

  render() {
    return (
      <div id='aboutUs-years-events'>

        <div className='fist-event'>
          <div>FIRST BOOK FAIR</div>
          <div>@ Mar 23,2009</div>
        </div>

        <div className='second-event'>
          <div>FIRST BOOK FAIR</div>
          <div>@ Mar 23,2009</div>
        </div>

      </div>
    );
  }
}
