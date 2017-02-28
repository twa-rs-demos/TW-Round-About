import React, {Component} from 'react';

export default class ArticleHead extends Component {
  render() {
    return (
      <div className="article-header">
        <h1 className="">{this.props.title}</h1>
      </div>
    );
  }
}
