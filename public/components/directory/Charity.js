import {Component} from 'react';

export default class Charity extends Component {
  render() {
    const charity = this.props.charity;
    const tags = charity.tags.map((tag, index) => {
      return <span className='tag' key={index}>{tag}</span>;
    });

    return (
      <div className='row charities'>
        <div className='col-xs-2 no-padding'>
          <img className='image'
               src='http://localhost/tw-ra/public/images/partners/logo_AGS.png' alt=''/>
        </div>
        <div className='col-xs-10 no-padding'>
          <h5 className='charity-name'>{charity.name}</h5>
          <div className='charity-info'>
            <div>
              <i className='fa fa-home' aria-hidden='true'></i>
              <span
                className='span'>{charity.address}</span>
            </div>
            <div>
              <i className='fa fa-phone' aria-hidden='true'></i>
              <span className='span'>{charity.phoneNumber}</span>
            </div>
            <div>
              <span className='span'>{charity.description}</span>
            </div>
            <div>
              {tags}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
