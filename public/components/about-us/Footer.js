import {Component} from 'react';

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

            <div className='col-md-1 col-xs-1 no-padding'>
              <div className='time-line'>
                <div className='circle-year'>
                  <span className='year'>2008</span>
                  <i className='fa fa-circle circle'> </i>
                </div>
              </div>
            </div>

            <div className='col-md-1 col-xs-1 no-padding'>
              <div className='time-line'>
                <div className='circle-year' onClick={this.showEvents2009.bind(this)}>
                  <span className='year'>2009</span>
                  <i className='fa fa-circle circle'> </i>
                </div>
              </div>
            </div>

            <div className='col-md-1  col-xs-1 no-padding'>
              <div className='time-line'>
                <div className='circle-year'>
                  <span className='year'>2010</span>
                  <i className='fa fa-circle circle'> </i>
                </div>
              </div>
            </div>

            <div className='col-md-1 col-xs-1  no-padding'>
              <div className='time-line'>
                <div className='circle-year'>
                  <span className='year'>2011</span>
                  <i className='fa fa-circle circle'> </i>
                </div>
              </div>
            </div>

            <div className='col-md-1 col-xs-1 no-padding'>
              <div className='time-line'>
                <div className='circle-year'>
                  <span className='year'>2012</span>
                  <i className='fa fa-circle circle'> </i>
                </div>
              </div>
            </div>

            <div className='col-md-1 col-xs-1 no-padding'>
              <div className='time-line'>
                <div className='circle-year'>
                  <span className='year'>2013</span>
                  <i className='fa fa-circle circle'> </i>
                </div>
              </div>
            </div>

            <div className='col-md-1 col-xs-1 no-padding'>
              <div className='time-line'>
                <div className='circle-year'>
                  <span className='year'>2014</span>
                  <i className='fa fa-circle circle'> </i>
                </div>
              </div>
            </div>

            <div className='col-md-1 col-xs-1 no-padding'>
              <div className='time-line'>
                <div className='circle-year'>
                  <span className='year'>2015</span>
                  <i className='fa fa-circle circle'> </i>
                </div>
              </div>
            </div>

            <div className='col-md-1 col-xs-1 no-padding'>
              <div className='time-line'>
                <div className='circle-year'>
                  <span className='year'>2016</span>
                  <i className='fa fa-circle circle'> </i>
                </div>
              </div>
            </div>

            <div className='col-md-1 col-xs-1 no-padding'>
              <i className='fa fa-chevron-right circle chevron'> </i>
            </div>
          </div>
          <div className='col-xs-offset-3 col-xs-1'>
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
