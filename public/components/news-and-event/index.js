import {Component} from 'react';
import NewsSearchHead from './NewsSearchHead';
import {MaxPicture} from '../common/';
import MainContent from './MainContent/index';

export default class NewAndEvent extends Component {
  render() {
    const pictureSrc = './public/images/newsAndEvent/hero_news&events.png';
    return (
      <div id='news_event'>
        <MaxPicture src={pictureSrc}/>
        <NewsSearchHead />
        <MainContent/>
      </div>
    );
  }
}
