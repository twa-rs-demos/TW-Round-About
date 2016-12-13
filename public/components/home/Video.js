import React, {Component} from 'react';
import superagent from 'superagent';


export default class media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }

  componentDidMount() {
    superagent
      .get('/wp-json/wp/v2/posts/46')
      .end((err, res) => {
        if (err) {
          throw(err);
        } else {
          console.log((res.body.content.rendered));
          this.setState({
            content: res.body.content.rendered
          });
        }
      });
  }

  render() {
    return (
      <div id="test">
        {xmlDoc}
      </div>
    )
  }
}

/*<div className="middle-text">*/
/*<p> 我们是众爱</p>*/
/*<span> 众爱是连接捐款人与受助人的桥梁</span>*/
/*// </div>*/
/*// <div className="show-video">*/
/*//   <embed src="http://www.iqiyi" width="620" height="400" className="video" autostart="true/false"*/
/*//          loop="true/false"></embed>*/
/*// </div>*/
