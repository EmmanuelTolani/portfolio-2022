import Image from "next/image";
const Home = ({ dark }) => {
  return (
    <div className="orido_tm_hero orido_tm_section" id="home">
      <div className="container">
        <div className="content">
          <div className="details">
            <div className="short">
              <span
                style={{
                  fontSize: "21px",
                  color: "#4C359A",
                  fontWeight: "600",
                }}
              >
                Hello, I'm
              </span>
              <h3>
                Emmanuel Tolani{" "}
                <img className="svg" src="img/svg/hi.svg" alt="waving hand" />
              </h3>
              <span
                className="job"
                style={{ color: "#4C359A", fontWeight: "600" }}
              >
                Front End Developer
              </span>
            </div>
            <div className="text">
              <p>
                {`I'm`} a developer based in Canada 🍁. I specialize in the
                creation and deployment of email marketing campaigns.
              </p>
            </div>
            <div className="buttons">
              <div className="orido_tm_boxed_button">
                <a
                  className="anchor"
                  href="https://calendly.com/emmanueltolani17/30min"
                  target={"_blank"}
                >
                  Schedule a Call{" "}
                  <img
                    className="svg"
                    src="img/svg/send.svg"
                    alt="contact button"
                  />
                </a>
              </div>
              <div className="orido_tm_simple_button">
                <a className="line_effect anchor" href="#portfolio">
                  My Works{" "}
                  <img
                    className="svg"
                    src="img/svg/top-arrow.svg"
                    alt="portfolio button"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="orido_tm_follow">
          <span>Follow me:</span>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/emmanuel-tolani/"
                target={"_blank"}
              >
                <img
                  className="svg"
                  src="img/svg/linkedin-in-brands.svg"
                  alt="linkendin"
                />
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com/tolanie/collections"
                target={"_blank"}
              >
                <img
                  className="svg"
                  src="img/svg/social/dribbble.svg"
                  alt="dribbble"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/EmmanuelTolani/" target={"_blank"}>
                <img
                  className="svg"
                  src="img/svg/github-alt-brands.svg"
                  alt="github"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="orido_tm_down">
        <a className="anchor" href="#about">
          <img
            className="svg"
            src={`img/svg/${dark ? "down_button_light" : "down_button"}.svg`}
            alt="scroll down"
          />
        </a>
      </div>
      <div className="avatar">
        <div className="img">
          <Image
            src={`/img/hero/emman1.jpeg`}
            alt="emmanuel tolani"
            objectFit="contain"
            height={530}
            width={450}
            quality={100}
          />
          {/* <div className="video_button">
            <a
              className="popup-youtube"
              href="https://www.youtube.com/watch?v=7e90gBu4pas"
            >
              <img className="anim_circle" src="img/hero/welcome.png" alt="" />
              <img className="svg" src="img/svg/play.svg" alt="" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
