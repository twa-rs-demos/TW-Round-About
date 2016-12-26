import React,{Component} from 'react';

export default class BreadCrumb extends Component{
  // componentWillMount() {
  //   this.props.dispatch({
  //     type: 'UPDATE_URI',
  //     uri: this.props.location
  //   });
  //
  //   this.props.router.listen(location => {
  //     this.props.dispatch({
  //       type: 'UPDATE_URI',
  //       uri: location
  //     });
  //   });
  // }
  // componentDidUpdate(){
  //   console.log('---------')
  //   // this.props.router.push(URI_PREFIX + '/ourwork');
  // }
  render(){
    console.log(this.props);
    return (<div>
      BreadCrumb
    </div>);
  }
}
