import {Component} from "react";

export default class ContactAddress extends Component {

  render() {
    return (
      <div id='content-address'>
        <div className='container'>
          <div className='col-xs-offset-2 col-xs-7 address'>
            <p>Address:Yuyang Road West,Off An Hua Road(Being Yosemite Villa Compound),Shunyi District.Open Time:Mon-Sat
              9.30am-5.30pm Mobile Phone:137 1877 7761 (English),137 1805 3814(Chinese Only)</p>
            <p>Email:<span className='email'>Roundaboutvolunteer@yahoo.co.uk</span></p>
          </div>
        </div>
        <div className='text-center'>
          <img className='wechat-picture' src='http://localhost/tw-ra/public/images/contactUs/wechat03.png'/>
          <p className='wechat'>Wechat</p>
        </div>
      </div>
    );
  }
}
