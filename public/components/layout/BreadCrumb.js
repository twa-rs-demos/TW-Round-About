import React,{Component} from 'react';

export default class BreadCrumb extends Component{
  componentWillMount() {
    this.props.dispatch({
      type: 'UPDATE_URI',
      uri: this.props.location
    });

    this.props.router.listen(location => {
      this.props.dispatch({
        type: 'UPDATE_URI',
        uri: location
      });
    });
  }
  render(){
    return (<div>
      BreadCrumb
    </div>);
  }
}
