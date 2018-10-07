import React from "react";

import CodepenIcon from "./svg/codepen.svg";
import EmailIcon from "./svg/email.svg";
import FlickrIcon from "./svg/flickr.svg";
import GithubIcon from "./svg/github.svg";
import LastfmIcon from "./svg/lastfm.svg";
import LinkedinIcon from "./svg/linkedin.svg";
import SoundcloudIcon from "./svg/soundcloud.svg";
import TwitterIcon from "./svg/twitter.svg";

export default ({ icon }) => {
  return {
    codepen: <CodepenIcon />,
    email: <EmailIcon />,
    flickr: <FlickrIcon />,
    github: <GithubIcon />,
    lastfm: <LastfmIcon />,
    linkedin: <LinkedinIcon />,
    soundcloud: <SoundcloudIcon />,
    twitter: <TwitterIcon />
  }[icon];
};
