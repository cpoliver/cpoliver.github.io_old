import React from "react";

import CodepenIcon from "./svg/codepen.svg";
import EmailIcon from "./svg/email.svg";
import FlickrIcon from "./svg/flickr.svg";
import GithubIcon from "./svg/github.svg";
import LastfmIcon from "./svg/lastfm.svg";
import LinkedinIcon from "./svg/linkedin.svg";
import SoundcloudIcon from "./svg/soundcloud.svg";
import TwitterIcon from "./svg/twitter.svg";

export default props => {
  const key = props.icon.toLowerCase().replace(".", "");

  return {
    codepen: <CodepenIcon {...props} />,
    email: <EmailIcon {...props} />,
    flickr: <FlickrIcon {...props} />,
    github: <GithubIcon {...props} />,
    lastfm: <LastfmIcon {...props} />,
    linkedin: <LinkedinIcon {...props} />,
    soundcloud: <SoundcloudIcon {...props} />,
    twitter: <TwitterIcon {...props} />
  }[key];
};
