import "./Club.scss";
import back from "../../assets/images/Flat Forest-01.png";


export const Club = () => {
  return (
    <section className="club contentWrapper" id="roadmap">
      <h1 className="section__title">Roadmap</h1>
     
      <div className="intro__back">
        <img alt="back" src={back}></img>
      </div>
    </section>
  );
};

export default Club;
