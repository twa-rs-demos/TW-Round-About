import {Component} from 'react';
import superagent from 'superagent';

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }

  componentDidMount() {
    superagent
      .get('/wp-json/wp/v2/posts?slug=ourwork')
      .end((err, res) => {
        if (err) {
          throw (err);
        } else {
          this.setState({
            content: res.body[0].content.rendered
          });
        }
      });
  }

  render() {
    return (
      <div className='content' dangerouslySetInnerHTML={{__html: this.state.content}}></div>
    );
  }
}
