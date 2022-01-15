import { NotificationManager } from "react-notifications";

import "./Intro.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../assets/images/ape1.png";
import img2 from "../../assets/images/ape2.png";
import img3 from "../../assets/images/ape3.png";
import img4 from "../../assets/images/ape4.png";

import back from "../../assets/images/bayc-mutant-hero.png";
import MinusBtn from "../../assets/images/minus-rectangle_1.svg";
import PlusBtn from "../../assets/images/plus-rectangle_1.svg";

export const Intro = ({
  walletAddress,
  onConnectWalletHandler,
  mintLoading,
  onMintHandler,
}) => {
  const [number, setNumber] = useState(1);
  const [total, setTotal] = useState(30);
  const actionMinus = () => {
    let index = number - 1;
    setNumber(index);
    setTotal(index * 30);
  };

  const actionPlus = () => {
    let index = number + 1;
    setNumber(index);
    setTotal(index * 30);
  };

  const buyAPE = () => {
    NotificationManager.success("Success!");
  };

  const mintAction = () => {
    onMintHandler(number);
  };

  return (
    <section className="intro" id="intro">
      <div className="intro__back">
        <img alt="back" src={back}></img>
      </div>

      <div className="contentWrapper">
        <div className="intro__fair" id="buy">
          <div className="intro__fair__title">Mint A Bigfoot (Not yet. Coming soon...) </div>
          <div className="intro__fair__mint">
            <div className="intro__fair__mint__title">
              <button
                className="navBar__btn__connect"
                onClick={() => onConnectWalletHandler()}
              >
                {walletAddress === "" ? "Connect Wallet" : walletAddress}
              </button>
            </div>
            <div className="intro__fair__mint__counter">
              <button onClick={() => (number > 1 ? actionMinus() : null)}>
                <img src={MinusBtn} alt="pic1"></img>
              </button>
              <div>{number}</div>
              <button onClick={() => (number < 20 ? actionPlus() : null)}>
                <img src={PlusBtn} alt="pic1"></img>
              </button>
            </div>
            <div className="intro__fair__mint__wrapper">
              <button
                type="button"
                onClick={() => {
                  if (!mintLoading) mintAction();
                }}
              >
                {mintLoading && (
                  <FontAwesomeIcon
                    className="mint-spinner"
                    icon={faSpinner}
                    size="1x"
                  />
                )}
                &nbsp;Mint Bigfoot for ... TBD
              </button>
            </div>
          </div>
        </div>
        <div className="intro__welcome" id="storyline">
          <div className="intro__welcome__desc">
            <h1 className="section__title">Storyline</h1>
            <p className="section__desc">
              WE are Bigfoot! 2500 unique CRYPTOids, living in the Ethereum
              forest, wandering out once in a while for food or fun; trying not
              to be spotted. Unfortunately, some backwoods hunters have heard
              rumors about our location and are close enough that we must take
              action!
              <br />
              <br />
            </p>
          </div>

          <div className="intro__welcome__pictures">
            <div>
              <img alt="img" src={img1}></img>
            </div>
            <div>
              <img alt="img" src={img2}></img>
            </div>
            <div>
              <img alt="img" src={img3}></img>
            </div>
            <div>
              <img alt="img" src={img4}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
