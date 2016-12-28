import {Component} from 'react';

export default class MaxPicture extends Component {

  render() {
    const background={
      backgroundImage: 'url(' + this.props.src + ')',
    };
     console.log(this.props.src);
    return (
      <div style={background} className="picture-max">
        {this.props.children}
      </div>
    );
  }
}
