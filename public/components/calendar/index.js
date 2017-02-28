import {Component} from "react";
import NewsSearchHead from "../news-and-event/NewsSearchHead";
import {MaxPicture} from "../common/";
import MainContent from "../common/NewsAndCalendar/index";
import datas from "../news-and-event/newsAndEventData";


export default class Calender extends Component {

  render() {
    const pictureSrc = 'http://localhost/tw-ra/public/images/newsAndEvent/hero_news&events.png';
    return (
      <div id="news-and-event">
        <MaxPicture src={pictureSrc}/>
        <NewsSearchHead />
        <MainContent datas={datas} show='calendar'/>
      </div>
    );
  }
}
