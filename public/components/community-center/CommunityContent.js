import {Component} from "react";
import {Link} from "react-router";

export default class CommunityContent extends Component {

  render() {
    return (
      <div id='community-content'>
        <div className=' col-xs-offset-1 col-xs-10'>
          <p className='fist-par'>Our community center is currently under construction,slated to open soon. We can't
            wait to share with
            you!</p>
          <p className='second-par'>Meanwhile you can ...</p>
          <ul>
            <li>Stay posted on developments,warp to <Link className='gotoPage' to={'/tw-ra/getinvolved'}>get Involved</Link></li>
            <li className='li-second'>Follow us on Wechat</li>
          </ul>
        </div>


        <div className='text-center'>
          <img className='weChat-position' src='http://localhost/tw-ra/public/images/home/wechat store.png'/>
          <p className='weChat-words'>wechat</p>
        </div>


      </div>
    );
  }
}
