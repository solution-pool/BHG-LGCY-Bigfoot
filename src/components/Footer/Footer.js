import './Footer.scss';
import discordIcon from '../../assets/images/discord.svg';
import instagramIcon from '../../assets/images/instagram.svg';
import twitterIcon from '../../assets/images/twitter.svg';
import homeIcon from '../../assets/images/home.png';
import telegramIcon from '../../assets/images/telegram.png';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__siteName">Bigfoot CRYPTOids is one of the very first NFT projects on LGCY.</div>
            <div className="footer__links">
                <a href="/">
                    <img src={homeIcon} alt="icon2"></img>
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
            <div className="footer__copyright">© 2022 Bigfoot CRYPTOids</div>
        </div>
    )
}

export default Footer;