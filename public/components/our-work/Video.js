import {Component} from 'react';
import superagent from 'superagent';

// export default class Video extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       content: ''
//     };
//   }
//
//   componentDidMount() {
//     superagent
//       .get('/wp-json/wp/v2/posts?slug=ourwork')
//       .end((err, res) => {
//         if (err) {
//           throw (err);
//         } else {
//           this.setState({
//             content: res.body[0].content.rendered
//           });
//         }
//       });
//   }
//
//   render() {
//     return (
//       <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
//     );
//   }
// }

export default class Video extends Component {
  render() {

    return (
      <div id='ourwork-video'>
        <div className="ourwork-title">
          <h2 className='title'>众爱是希望的桥梁</h2>
        </div >
        <p className="describe">
          我们为全国各地需要帮助的孩子募集善款，并把他们推荐给能帮助他们的团体或者个人。
        </p >

        <div className="row video">
          <div className='col-md-offset-2 col-md-8 col-xs-12 '>
            <embed src='http://player.youku.com/player.php/sid/XMTM1NjIyMTA0NA==/v.swf'
                   type='application/x-shockwave-flash' className='video-content'>
            </embed>
          </div>
        </div>
      </div>
    )
  }
}
