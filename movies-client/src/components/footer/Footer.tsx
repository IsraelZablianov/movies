import "./Footer.scss";
import { ReactComponent as MainIcon } from "../../assets/icons/favicon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook-share-icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram-share-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin-share-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter-share-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/icons/youtube-share-icon.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="Container">
        <MainIcon />
        <div className="Contact-Us">Contact us</div>
        <div className="Support">
          support@nextmovies.com <br /> Mon – Fri | 6:00am – 5:00 pm PT
        </div>
        <div className="Share-Icons">
          <FacebookIcon></FacebookIcon>
          <LinkedinIcon></LinkedinIcon>
          <TwitterIcon></TwitterIcon>
          <InstagramIcon></InstagramIcon>
          <YoutubeIcon></YoutubeIcon>
        </div>
      </div>
    </footer>
  );
};
