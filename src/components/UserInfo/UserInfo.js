import React from "react";

export default class UserInfo extends React.Component {
  render() {
    const { fullname, username, followersCount } = this.props;
    return (
      <React.Fragment>
      <p>Hello {fullname}!</p>
      <div className="profile-details--container">
        <p>{username}</p>
        <p>Followers count: {followersCount}</p>
      </div>
      </React.Fragment>
    );
  }
}
