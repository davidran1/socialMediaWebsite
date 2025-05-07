import React from "react";
import { Link } from "react-router-dom";

import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="/home">
        <img src={Home} alt="Home" />
      </Link>

      <Link to="/settings">
        <UilSetting />
      </Link>

      <Link to="/notifications">
        <img src={Noti} alt="Notifications" />
      </Link>

      <Link to="/chat">
        <img src={Comment} alt="Chat" />
      </Link>
    </div>
  );
};

export default NavIcons;

