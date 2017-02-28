import React, {Component} from 'react';

export default class MedicalAssitanceTop extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    console.log(this.props.describe);
    console.log(this.refs.describe.className);
    if(this.props.describe ===''){
      this.refs.describe.className='';
    }

  }

  render() {
    console.log(this.props.describe);
    return (
      <div className="assistance-top">
        <div>
          <h2 className="middle-title">{this.props.title}</h2>
        </div>
        <div className="assistence-pic-container">
          <img src={this.props.pictureSrc}/>
        </div>
        <div className="col-sm-offset-2 col-sm-8 col-xs-offset-1 col-xs-10 assistance-describe">
          <p className="css-wrap describe-p" ref='describe'>{this.props.describe}</p>
        </div>
      </div>
    );
  }
}
