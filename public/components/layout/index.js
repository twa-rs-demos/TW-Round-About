import {Component} from 'react';
import Header from './header/index';
import ApplyMonthly from './ApplyMonthly';
import Footer from './Footer/index';
import BreadCrumb from '../../containers/layout/breadCrumb';

export default class Test extends Component {

  componentWillMount() {
    this.props.dispatch({
      type: 'UPDATE_URI',
      uri: this.props.location
    });

    this.props.router.listen(location => {
      this.props.dispatch({
          type: 'UPDATE_URI',
          uri: location
        }
      );
    });
  }

  render() {

    return (
      <div>
        <Header/>
        <BreadCrumb/>
        {this.props.children}
        <ApplyMonthly/>
        <Footer/>
      </div>
    );
  }
}



















