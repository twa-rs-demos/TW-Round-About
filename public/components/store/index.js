import {Component} from 'react';
import RoundAboutTaoBao from './RoundAboutTaoBao';
import ShoppingForChildren from './ShoppingForChildren';
import PhysicalStore from './PhysicalStore';
import images from './images';

export default class RounaboutStore extends Component {

  render() {
    return (
      <div id='round-store'>
        <div className='row buy'>
          <div className='col-sm-offset-2 col-sm-8 col-xs-12 buy-image no-padding'>
            <img src={images.buy2} alt=''/>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-offset-2 col-xs-offset-1 col-sm-8 col-xs-10 no-padding'>
            <RoundAboutTaoBao/>
          </div>
        </div>
        <div className='row shopping-for-children' id='onlinestore'>
          <div className='col-sm-offset-3 col-xs-offset-1 col-sm-6 col-xs-10 no-padding'>
            <ShoppingForChildren/>
          </div>
        </div>
        <div className='row physical-store' id='physicalstore'>
          <div className='col-sm-offset-2 col-xs-offset-1 col-sm-8 col-xs-10 no-padding'>
            <PhysicalStore/>
          </div>
        </div>
      </div>
    );
  }
}
