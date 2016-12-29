import {Component} from 'react';
import ContentStatic from './StaticContent';
import {MaxPicture} from '../common/';
import {Link} from 'react-router';
import '../../style/ourWorkAssistance.less';

export default class ourWorkPage extends Component {
  render() {
    const pictureSrc = 'http://localhost/tw-ra/public/images/ourWorkAssistance/hero_leukemiaAssistance.png';
    return (
      <div id='ourwork-assistance'>

        <MaxPicture src={pictureSrc}>
          <div className='ourWorkAssistence-picture-text'>
            <p>Yang bin is a 9 year old boy from Xi’an.</p>
            <p> He was diagnosed with leukemia in 2015.</p>
            <p> The dignity of our recipients is something</p>
            <div className='ourWorkAssistence-picture-btn'>
              <Link to={URI_PREFIX + '/childStory'} className='story'>阅读杨斌的故事</Link>
            </div>
          </div>
        </MaxPicture>

        <ContentStatic/>
      </div>
    );
  }
}
