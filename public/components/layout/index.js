import {Component} from 'react';
import Header from './header/index';
import ApplyMonthly from './ApplyMonthly';
import Footer from './Footer/index';
import '../../style/header.less';
import '../../style/footer.less';
import Breadcrumb from '../../containers/layout/breadcrumb';

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
      });
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <Breadcrumb/>
        {this.props.children}
        <ApplyMonthly/>
        <Footer/>
      </div>
    );
  }
}
