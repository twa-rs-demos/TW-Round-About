import {Component} from 'react';
import images from './images';

export default class SameFamily extends Component {
  render() {
    return (
      <div>
        <h2 className='middle-title'>众爱与合作伙伴同是一家人</h2>
        <div className='partners-logo'>
          <div className='row'>
            <div className='col-sm-4 text-center'>
              <img className='image-border'
                   src={images.logoChinaCuliure} alt=''/>
              <div className='logo-name'>China Culiure Center</div>
            </div>
            <div className='col-sm-4 text-center'>
              <img className='image-border'
                   src={images.logoChilden} alt=''/>
              <div className='logo-name'>Children's House Montessori Kindergarten</div>
            </div>
            <div className='col-sm-4 text-center'>
              <img className='image-border'
                   src={images.logoCity} alt=''/>
              <div className='logo-name'>City Wise</div>
            </div>
          </div>

          <div className='row second-row'>
            <div className='col-sm-3 text-center logo'>
              <img className='image-border'
                   src={images.logoAgs} alt=''/>
              <div className='logo-name'>AGS</div>
            </div>
            <div className='col-sm-3 text-center logo'>
              <img className='image-border'
                   src={images.logoAgs} alt=''/>
              <div className='logo-name'>AGS</div>
            </div>
            <div className='col-sm-3 text-center logo'>
              <img className='image-border'
                   src={images.logoAgs}
                     alt=''/>
              <div className='logo-name'>AGS</div>
            </div>
            <div className='col-sm-3 text-center logo'>
              <img className='image-border'
                   src={images.logoAgs} alt=''/>
              <div className='logo-name'>AGS</div>
            </div>
            <div className='col-sm-3 text-center logo'>
              <img className='image-border'
                   src={images.logoAgs} alt=''/>
              <div className='logo-name'>AGS</div>
            </div>
            <div className='col-sm-3 text-center logo'>
              <img className='image-border'
                   src={images.logoAgs} alt=''/>
              <div className='logo-name'>AGS</div>
            </div>
            <div className='col-sm-3 text-center logo'>
              <img className='image-border'
                   src={images.logoAgs} alt=''/>
              <div className='logo-name'>AGS</div>
            </div>
            <div className='col-sm-3 text-center logo'>
              <img className='image-border'
                   src={images.logoAgs} alt=''/>
              <div className='logo-name'>AGS</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
