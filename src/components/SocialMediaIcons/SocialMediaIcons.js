import React from "react";
import PropTypes from "prop-types";

// Social Media Platform Icons:
import Instagram from "../../assets/SocialMediaIcons/instagram.png";
import Facebook from "../../assets/SocialMediaIcons/facebook.png";
import Spotify from "../../assets/SocialMediaIcons/spotify.png";
import Youtube from "../../assets/SocialMediaIcons/youtube.png";
import Twitter from "../../assets/SocialMediaIcons/twitter.png";

// Styled Components
import {
  StyledOuterDiv,
  StyledInnerDiv,
  StyledImg,
} from "./SocialMediaIconsStyles";

const SocialMediaIcons = (props) => {
  return (
    <StyledOuterDiv>
      {props.socials ? (
        <StyledInnerDiv data-test="social-media-widget">
          {props.socials.instagram ? (
            <a
              href={props.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledImg
                data-test="widget"
                src={Instagram}
                alt="Instagram Icon."
              />
            </a>
          ) : null}
          {props.socials.facebook ? (
            <a
              href={props.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledImg
                data-test="widget"
                src={Facebook}
                alt="Facebook Icon."
              />
            </a>
          ) : null}
          {props.socials.spotify ? (
            <a
              href={props.socials.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledImg data-test="widget" src={Spotify} alt="Spotify Icon." />
            </a>
          ) : null}
          {props.socials.youtube ? (
            <a
              href={props.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledImg data-test="widget" src={Youtube} alt="Youtube Icon." />
            </a>
          ) : null}
          {props.socials.twitter ? (
            <a
              href={props.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledImg data-test="widget" src={Twitter} alt="Twitter Icon." />
            </a>
          ) : null}
        </StyledInnerDiv>
      ) : null}
    </StyledOuterDiv>
  );
};

SocialMediaIcons.propTypes = {
  socials: PropTypes.shape({
    id: PropTypes.number,
    artist_id: PropTypes.number,
    artist_name: PropTypes.string,
    instagram: PropTypes.string,
    facebook: PropTypes.string,
    spotify: PropTypes.string,
    youtube: PropTypes.string,
    twitter: PropTypes.string,
  }),
};

export default SocialMediaIcons;
