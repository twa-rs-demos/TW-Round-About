import {Component} from 'react';
import teamMembersPictures from './teamMembersPictureDate';
import VolunteerForm from '../layout/Footer/VolunteerForm';

export default class OurTeam extends Component {

  showVolunteerForm() {
    this.props.showApplicationForm();
  }

  showForm() {
    this.props.closeForm();
  }

  render() {
    const teamMembers = teamMembersPictures.map((member, index) => {
      if (index === 5) {
        return (
          <div key={index}>
            <div className='col-md-2'></div>
            <div className='col-md-2 col-xs-5 teamMember'>
              <img className='center-block' src={member.src}/>
            </div>
          </div>
        );
      } else {
        return (
          <div className='col-md-2 col-xs-5 teamMember' key={index}>
            <img className='center-block' src={member.src}/>
          </div>
        );
      }
    });

    return (
      <div id='ourTeam' className='container'>
        <div className='col-md-offset-1 col-md-10 col-xs-offset-3 col-xs-6'>
          <h3 className='middle-title ourTime-h3'>我们的团队</h3>
        </div>
        <div className='col-md-10  col-xs-10'>
          <div className='row'>
            <div className='col-md-2'></div>
            {teamMembers}
          </div>
        </div>
        <div className='col-md-offset-1 col-md-10 col-xs-offset-3 col-xs-6'>
          <button className='button-style center-block welcome-family' onClick={this.showVolunteerForm.bind(this)}>
            <span>加入众爱大家庭</span>
          </button>
        </div>

        <div className={this.props.state ? '' : 'hidden'}>
          <VolunteerForm showForm={this.showForm.bind(this)}
                         title='VOLUNTEERS APPLICATION FORM' inputTextInfo='Email Address'
                         textAreaInfo='Commits'/>
        </div>

      </div>
    );
  }
}
