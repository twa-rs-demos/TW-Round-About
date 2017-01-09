import {Component} from 'react';
import {Link} from 'react-router';

export default class StaticContent extends Component {
  render() {
    return (
      <div className='get-involved-welcome'>
        <h2 className='middle-title'>欢迎来到众爱大家庭</h2>
        <div className='row'>
          <div className='col-sm-6 text-left get-involved-item'>
            <div className='child'>
              <img src='http://localhost/tw-ra/public/images/getInvolved/icon_volunteer.png'/>
              <Link to={URI_PREFIX + '/volunteer'}>加入志愿者行列</Link>
            </div>
          </div>
          <div className='col-sm-6 text-left get-involved-item' id='applyrescue'>
            <div className='child'>
              <img src='http://localhost/tw-ra/public/images/getInvolved/icon_apply.png'/>
              <a href='https://jinshuju.net/f/RhPPwa' target='_blank'>申请救助和支援</a>
            </div>
          </div>

          <div className='col-sm-6 text-left get-involved-item' id='charities'>
            <div className='child'>
              <img src='http://localhost/tw-ra/public/images/getInvolved/icon_support.png'/>
              <Link to={URI_PREFIX + '/classifieds'}>合作与支持的慈善机构</Link>
            </div>
          </div>
          <div className='col-sm-6 text-left get-involved-item'>
            <div className='child'>
              <img src='http://localhost/tw-ra/public/images/getInvolved/icon_donate.png'/>
              <Link to={URI_PREFIX + '/donate'}>捐赠</Link>
            </div>
          </div>

          <div>
            <div className='col-sm-6 text-left get-involved-item'>
              <div className='child'>
                <img src='http://localhost/tw-ra/public/images/getInvolved/icon_support.png'/>
                <Link to={URI_PREFIX + '/directory'}>您的捐赠可以帮到谁</Link>
              </div>
            </div>
            <div className='col-sm-6 text-left get-involved-item' id='communitycenter'>
              <div className='child'>
                <img src='http://localhost/tw-ra/public/images/getInvolved/icon_community center.png'/>
                <Link to={URI_PREFIX + '/communityCenter'}>社区中心</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
