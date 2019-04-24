import React from "react";

export default class Card extends React.Component {
  render() {
    const { followers, repoName, repoUrl } = this.props;
    return (
      <React.Fragment>
        <a href={repoUrl}>{repoName}</a>
        <p>Followers count: {followers}</p>
      </React.Fragment>
    );
  }
}
