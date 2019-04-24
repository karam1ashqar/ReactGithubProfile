import React from "react";
import Card from "./Card/Card";
import Image from "./Image/Image";
import UserInfo from "./UserInfo/UserInfo";
import { token } from "../utils/token";
import { fetchUserInfo } from "../utils/fetchUserInfo";
import { fetchUserRepos } from "../utils/fetchUserRepos";

export class App extends React.Component {
  state = {
    fullname: "John Smith",
    followersCount: 0,
    image: "",
    username: "john1smith",
    repos: <div />
  };

  componentDidMount() {
    fetchUserInfo(this.updateUser);
  }

  updateUser = data => {
    this.setState({
      fullname: data.name,
      image: data.avatar_url,
      followersCount: data.followers,
      username: data.login
    });

    fetchUserRepos(this.updateRepos);
  };

  updateRepos = data => {
    console.log(data);
    let arr = [];

    data.map((repo, index) => {
      arr.push(
        <Card followers={repo.stargazers_count} repoName={repo.name} repoUrl={repo.html_url} key={index} />
      );
    });

    this.setState({
      repos: arr
    });
  };

  render() {
    const { fullname, followersCount, username, repos, image } = this.state;
    return (
        <div className="profile--container">
          <Image src={image} />
          <UserInfo
            fullname={fullname}
            followersCount={followersCount}
            username={username}
          />
          <h3>User's Repos</h3>
          <div className="profile-details--container bordered">{repos}</div>
        </div>
    );
  }
}
