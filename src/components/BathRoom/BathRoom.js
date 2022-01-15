import "./BathRoom.scss";
import pic from "../../assets/images/toilet.png";

export const BathRoom = () => {
  return (
    <section className="bathRoom contentWrapper">
      <div className="bathRoom__content">
        <h1 className="section__title">
          What happens to Mo’s for Bros after Movember?
        </h1>

        <p className="section__desc">
          Movember just seemed like a good time to launch this thing-- but we
          intend to be around for a long time.
        </p>
        <p className="section__desc">
          We’ll be collaborating with IRL Men’s Health organizations and plan to
          build a Men’s Health ecosystem comprised of utility, community,
          rewards and growth.
        </p>
        <p className="section__desc">
          We want the community to help determine what we should focus on next -
          so every Bro (or Sis) with a Mo’ has a say in the future of Mo’s for
          Bros!
        </p>
      </div>

      <div className="bathRoom__picture">
        <img alt="img" src={pic}></img>
      </div>
    </section>
  );
};

export default BathRoom;
