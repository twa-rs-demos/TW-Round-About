import React, {Component} from 'react';

export default class MedicalAssitanceTop extends Component {
  render() {
    return (
      <div className="assistance-top">
        <div>
          <h2 className="middle-title">{this.props.title}</h2>
        </div>
        <div className="assistence-pic-container">
          <img src={this.props.pictureSrc}/>
        </div>
        <div className="col-sm-offset-2 col-sm-8 col-xs-offset-1 col-xs-10 assistance-describe">
          <p className="css-wrap">{this.props.describe}</p>
        </div>
      </div>
    );
  }
}
