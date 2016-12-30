import {Component} from 'react';

export default class MaxPicture extends Component {

  render() {
    const background = {
      backgroundRepeat:'no-repeat',
      backgroundSize:'100% 100%',
      backgroundImage: 'url(' + this.props.src + ')'
    };
    return (
      <div style={background} className='picture-max'>
        {this.props.children}
      </div>
    );
  }
}
