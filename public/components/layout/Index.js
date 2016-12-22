import {Component} from 'react';
import Header from './header/Header';
import ApplyMonthly from './ApplyMonthly';
import Footer from './Footer/index';

export default class Test extends Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <ApplyMonthly/>
        <Footer/>
      </div>
    );
  }
}
