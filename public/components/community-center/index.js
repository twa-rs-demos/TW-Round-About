import {Component} from "react";
import CommunityPicture from "./CommunityPicture";
import CommunityContent from "./CommunityContent";

export default class CommunityCenter extends Component {
  render() {
    return (
      <div id='community-center' className='container'>
        <CommunityPicture/>
        <CommunityContent/>

      </div>
    );
  }
}
