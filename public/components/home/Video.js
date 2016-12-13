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
          this.setState({
            content: res.body.content.rendered
          });
        }
      });
  }

  render() {
    return (
      <div className="content" dangerouslySetInnerHTML={{__html: this.state.content}}></div>
    )
  }
}
