import {Component} from 'react';
import teamMembersPictures from './teamMembersPictureDate';


export default class OurTeam extends Component {

  render() {
    const teamMembers = teamMembersPictures.map((member, index)=> {
      if (index == 5) {
        return (
          <div>
            <div className='col-md-2'></div>
            <div className='col-md-2 col-xs-5 teamMember' key={index}>
              <img className='center-block' src={member.src}/>
            </div>
          </div>
        )

      }
      else {
        return (
          <div className='col-md-2 col-xs-5 teamMember' key={index}>
            <img className='center-block' src={member.src}/>
          </div>
        )
      }
    });

    return (
      <div id='ourTeam' className='col-md-offset-1 col-md-10 col-xs-offset-3 col-xs-6'>
        <h3 className='middle-title ourTime-h3'>我们的团队</h3>
        <div className='row'>
          <div className='col-md-2'></div>
          {teamMembers}
        </div>

        <button className='button-style center-block welcome-family'><span>加入众爱大家庭</span></button>

      </div>
    );
  }
}
