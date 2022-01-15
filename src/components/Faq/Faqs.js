import "./RoadMap.scss";

import video from "../../assets/videos/Mustache6.mp4";
import Faq from "react-faq-component";

export const Faqs = () => {
  const faqInfo = {
    rows: [
      {
        title: "When is the mint date?",
        content: "Right now, we are planning for the end of January for our first drop. However, since the LGCY blockchain is new, we want to make sure everything – including wallets and exchanges – are working efficiently before we commit to a date"
      },
      {
        title: "What is the cost?",
        content: "TBA (once we fix on a mint date)"
      },
      {
        title: "What blockchain are you launching on?",
        content: "We are using the new LGCY Network – a highly efficient Layer 1 protocol, capable of processing up to 10,000 transactions per second with an average cost of $.01 per. In addition to the quality of the blockchain, we anticipate some of the lowest gas fees you’ve ever seen for minting NFT’s!"
      },
      {
        title: "What wallet should we use?",
        content: "Many wallets are adopting the LGCY Network and establishing themselves right now, but we anticipate the Bitkeep will be the first and preferred wallet for USDL-lrc20."
      },
      {
        title:
          "What currency do we need?",
        content:
          "$USDL will be the required currency. There was/is an ERC20 version of USDL but it is being phased out in favor of the new LRC20 version. The LRC20 version is what you will need",
      },
      {
        title: "How many NFT’s will be available?",
        content:
          "For our first drop, we are only releasing 2000 Bigfoots. The collection will contain a few more than that, but we have special uses in store for the remaining ones.",
      },
      {
        title: "What else is planned for this project?",
        content:
          "Wow! Sooooo much! Check out the Roadmap. In addition to females, babies, new cryptids, our own Token, and merch, we will be staking the community wallet and allowing community members to participate in the pool! ",
      },
    ],
  };

  const config = {
    arrowIcon: "",
  };

  return (
    <section className="roadMap contentWrapper" id="faq">
      <div className="roadMap__title">
        <h1 className="section__title">FAQ</h1>
      </div>
      <div className="roadMap__description">
        <Faq data={faqInfo} config={config} />
      </div>

      {/* <div className="roadMap__picture">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div> */}
    </section>
  );
};

export default Faqs;
