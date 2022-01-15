import "./NavBar.scss";
import logo from "../../assets/images/bayc-logo-z.png";

import discordIcon from "../../assets/images/discord.svg";
import instagramIcon from "../../assets/images/instagram.svg";
import twitterIcon from "../../assets/images/twitter.svg";
import homeIcon from "../../assets/images/home.png";
import openseaIcon from "../../assets/images/opensea1.svg";
import telegramIcon from "../../assets/images/telegram.png";

import { Link } from "react-scroll";
import menuIcon from "../../assets/images/menu.svg";

export const NavBar = () => {
  const menu = [
    {
      title: "Storyline",
      to: "storyline",
    },
    {
      title: "Traits",
      to: "traits",
    },
    {
      title: "Roadmap",
      to: "roadmap",
    },
    {
      title: "The Game",
      to: "game",
    },
    {
      title: "Our part",
      to: "our",
    },
    {
      title: "FAQ",
      to: "faq",
    },
    {
      title: "The Team",
      to: "team",
    },
  ];

  return (
    <nav className="navBar">
      <a href="/" className="navBar__logo">
        <p className="navBar__logo__title">
        Bigfoot CRYPTOids
        </p>
      </a>

      <div className="navBar__menu">
        <div className="navBar__menu__links">
          {menu.map((item, index) => (
            <Link
              key={index}
              smooth={true}
              duration={500}
              spy={true}
              to={item.to}
              offset={-80}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="navBar__menu__socialIcons">
          <a href="https://t.me/BigfootCRYPTOids">
            <img src={telegramIcon} alt="icon2"></img>
          </a>
          {/* <a href="#javascript">
                        <img src={instagramIcon} alt="icon1"></img>
                    </a> */}
          <a href="https://discord.gg/Bigfoot-Cryptoids">
            <img src={discordIcon} alt="icon2"></img>
          </a>
          <a href="https://www.twitter.com/BigfootCryptoid">
            <img src={twitterIcon} alt="icon2"></img>
          </a>
          {/* <a href="#javascript">
                        <img src={telegramIcon} alt="icon2"></img>
                    </a> */}
        </div>
      </div>
      <div className="navBar__dropDownMenu">
        <img
          src={menuIcon}
          className="navBar__dropDownMenu__icon"
          alt="menu"
        ></img>
        <div className="navBar__dropDownMenu__content">
          {menu.map((item, index) => (
            <Link
              key={index}
              smooth={true}
              duration={500}
              spy={true}
              to={item.to}
              offset={-100}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
