import {Component} from 'react';
import superagent from 'superagent';
import noCache from 'superagent-no-cache';

export default class ChildStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }

  componentDidMount() {
    superagent
      .get(`/wp-json/wp/v2/posts/${this.props.location.query.id}`)
      .use(noCache)
      .end((err, res)=> {
        if (err) {
          throw err;
        }
        this.setState({content: res.body.content});
      })

  }

  render() {
    return (
      <div className="row">
        <div className="col-md-offset-3 col-md-6">
          <div dangerouslySetInnerHTML={{__html: this.state.content.rendered}}/>
        </div>
      </div>
    );
  }
}
