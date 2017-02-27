import {Component} from 'react';
import NewsSearchHead from './NewsSearchHead';
import {MaxPicture} from '../common/';
import MainContent from '../common/NewsAndCalendar/index';
import datas from './newsAndEventData';

export default class NewAndEvent extends Component {
  render() {
    const pictureSrc = 'http://localhost/tw-ra/public/images/newsAndEvent/hero_news&events.png';
    return (
      <div id="news-and-event">
        <MaxPicture src={pictureSrc}/>
        <NewsSearchHead />
        <MainContent datas={datas}/>
      </div>
    );
  }
}
