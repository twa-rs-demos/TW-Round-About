import {Component} from 'react';
import Header from './header/index';
import ApplyMonthly from './ApplyMonthly';
import Footer from './Footer/index';
import BreadCrumb from '../../containers/layout/breadCrumb';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowBreadCrumb: false
    };
  }

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
      if (this.props.breadCrumb.length > 1) {
        this.setState({isShowBreadCrumb: true});
      } else {
        this.setState({isShowBreadCrumb: false});
      }
    });
  }

  // componentWillUpdate() {
  //   if (this.props.breadCrumb.length > 1) {
  //     this.setState({isShowBreadCrumb: true});
  //   } else {
  //     this.setState({isShowBreadCrumb: false});
  //   }
  // }

  render() {
    return (
      <div>
        <Header/>
        {this.state.isShowBreadCrumb ? <BreadCrumb/> : ''}
        {this.props.children}
        <ApplyMonthly/>
        <Footer/>
      </div>
    );
  }
}
