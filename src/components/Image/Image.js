import React from "react";
import './Image.css'

export default class Image extends React.Component {
  render() {
    const { src } = this.props;
    return (
      <div className="profile--image">
        <img src={src} alt="Profile image" />
      </div>
    );
  }
}
