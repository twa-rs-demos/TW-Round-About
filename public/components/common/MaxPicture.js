import {Component} from 'react';

export default class MaxPicture extends Component {

  render() {
    const background = {
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      // backgroundSize:'contain',
      backgroundImage: 'url(' + this.props.src + ')'
    };
    return (
      <div style={background} className='picture-max'>
        {this.props.children}
      </div>
    );
  }
}
