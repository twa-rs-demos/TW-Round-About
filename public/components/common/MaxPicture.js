import {Component} from 'react';

export default class MaxPicture extends Component {

  render() {
    const background = {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: 'url(' + this.props.src + ')',
      backgroundPosition: 'center center'
    };
    return (
      <div style={background} className='picture-max'>
        {this.props.children}
      </div>
    );
  }
}
