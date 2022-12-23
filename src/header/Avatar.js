import React from "react";

import "./Avatar.scss";

const Avatar = () => {
  return (
    <div className="avatar-wrapper">
      <div className="abbreviation">
        <span>AW</span>
      </div>
      <div className="details">
        <div className="name">Adren Weza</div>
        <div className="location text-muted">Poland</div>
      </div>
    </div>
  );
};

export default Avatar;
