import "./Home.scss";
import NavBar from "../../components/NavBar/NavBar";
import Intro from "../../components/Intro/Intro";
import Specs from "../../components/Specs/Specs";
import Club from "../../components/Club/Club";
import Game from "../../components/Game/Game";
import Our from "../../components/Our/Our";
import BathRoom from "../../components/BathRoom/BathRoom";
import Gallery from "../../components/Gallery/Gallery";
import Faq from "../../components/Faq/Faqs";
import Team from "../../components/Team/Team";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import { mintNFT, mintFeeNFT } from "../../helpers/interact";
import { connectWallet, getCurrentWalletConnected } from "../../helpers/wallet";
import { getIsWhiteList } from "../../helpers/contract";
import { NotificationManager } from "react-notifications";

export const Home = () => {
  const [isWhiteList, setIsWhiteList] = useState(false);
  const [mintLoading, setMintLoading] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const initDatas = async () => {
      if (window.ethereum) {
        const { address, status } = await getCurrentWalletConnected();
        setWalletAddress(address);
        setStatus(status);
        onChangeWalletListener();
        onConnectWalletHandler();
      }
    };

    initDatas();
  }, []);

  const onConnectWalletHandler = async () => {
    if (window.ethereum) {
      const walletResponse = await connectWallet();
      setStatus(walletResponse.status);
      setWalletAddress(walletResponse.address);
      await onWhiteListHandler(walletResponse.address);
    } else {
      NotificationManager.success(
        "🦊 You must install Metamask in your browser"
      );
    }
  };

  const onChangeWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length) {
          setWalletAddress(accounts[0]);
          onWhiteListHandler(accounts[0]);
          setStatus("Get your Mo's, 0.03ETH");
        } else {
          setWalletAddress("");
          setStatus("Connect Metamask");
        }
      });

      window.ethereum.on("chainChanged", (chainId) => {
        onConnectWalletHandler();
      });
    } else {
      setStatus(
        <p>
          🦊 You must install Metamask, a virtual Ethereum wallet, in your
          browser.(https://metamask.io/download.html)
        </p>
      );
    }
  };

  const onWhiteListHandler = async (walletAddress) => {
    const whiteNum = await getIsWhiteList(walletAddress);
    setIsWhiteList(whiteNum > 0 ? true : false);
  };

  const onMintHandler = async (amount) => {
    if (!!walletAddress) {
      setMintLoading(true);

      if (isWhiteList) {
        const { success, status } = await mintFeeNFT(
          walletAddress,
          setMintLoading,
          amount
        );
        if (success) {
          setStatus("Congratulations. Mo's are successfully minted !");
          NotificationManager.success(
            "Congratulations. Mo's are  successfully minted !"
          );
        } else if (status.indexOf("insufficient fund") >= 0) {
          setStatus("Info", "You don't have enough eths to mint Mo's!");
          NotificationManager.info(
            "Info. You don't have enough eths to mint Mo's!"
          );
        } else if (status.indexOf("presale is not open") >= 0) {
          NotificationManager.info("Presale is not open !");
        } else if (
          status.indexOf("this address is not whitelisted for the presale") >= 0
        ) {
          NotificationManager.info(
            "This address is not whitelisted for the presale !"
          );
        } else if (
          status.indexOf(
            "this address is not allowed to mint that many during the presale"
          ) >= 0
        ) {
          NotificationManager.info(
            "This address is not allowed to mint that many during the presale!"
          );
        } else if (
          status.indexOf("this stakeholder is not allowed to mint that many") >=
          0
        ) {
          NotificationManager.info(
            "This stakeholder is not allowed to mint that many for free!"
          );
        } else {
          NotificationManager.info("Transaction is failed !");
        }
      } else {
        const { success, status } = await mintNFT(
          walletAddress,
          setMintLoading,
          amount
        );
        if (success) {
          setStatus("Congratulations", "Mo's are  successfully minted !");
          NotificationManager.success(
            "Congratulations. Mo's are  successfully minted!"
          );
        } else if (status.indexOf("insufficient fund") >= 0) {
          setStatus("Info", "You don't have enough eths to mint Mo's!");
          NotificationManager.info(
            "You don't have enough eths to mint Mo's!"
          );
        } else if (status.indexOf("presale is not open") >= 0) {
          NotificationManager.info("Presale is not open!");
        } else if (
          status.indexOf("this address is not whitelisted for the presale") >= 0
        ) {
          NotificationManager.info(
            "This address is not whitelisted for the presale!"
          );
        } else if (
          status.indexOf(
            "this address is not allowed to mint that many during the presale"
          ) >= 0
        ) {
          NotificationManager.info(
            "This address is not allowed to mint that many during the presale!"
          );
        } else {
          NotificationManager.info("Transaction is failed!");
        }
      }
    }
  };

  return (
    <div>
      <NavBar />

      <div className="container">
        <Intro
          walletAddress={walletAddress}
          onConnectWalletHandler={onConnectWalletHandler}
          mintLoading={mintLoading}
          onMintHandler={onMintHandler}
        />
        <Gallery />
        <Specs />
        <Club />
        <Game />
        <Our />
        
        <Faq />
        <Team />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
