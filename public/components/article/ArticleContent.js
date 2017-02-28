import React, {Component} from 'react';

export default class ArticleContent extends Component {
  render() {
    return (
      <div className="article-content">
        {this.props.content}
      </div>
    );
  }
}
