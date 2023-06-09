import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";

import { BsGithub } from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsTwitter />
      </div>

      <div>
        <BsGithub />
      </div>

      <div>
        <BsLinkedin />
      </div>
    </div>
  );
};

export default SocialMedia;
