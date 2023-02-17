import Image from "next/image";
const About = () => {
  return (
    <div className="orido_tm_section" id="about">
      <div className="orido_tm_about">
        <div className="about_in">
          <div className="left">
            <div className="box">
              <h3 className="year">3</h3>
              <span className="experience">Years of Experience</span>
              <h3 className="name">Tolani</h3>
            </div>
          </div>
          <div className="right">
            <span className="element">
              <img className="svg" src="img/svg/element.svg" alt="" />
            </span>
            <div className="orido_tm_main_title">
              <h3>
                <span>About Me</span>
              </h3>
            </div>
            <div className="text">
              <p>
                My name is Emmanuel, and I am a full-stack developer with two
                years of experience in the industry. I have a passion for
                developing efficient, user-friendly, and visually appealing web
                applications. Personal development is very important to me and
                I'm constantly improving my skills and knowledge to get the best
                results. I am also a professional scrum master, with meticulous
                attention to detail and an ability to work within tight
                deadlines ensuring I deliver projects on time, on budget, and
                with specifications. I also have a passion for fitness and
                bodybuilding.
              </p>
            </div>
            <div className="short">
              {/* <div className="orido_tm_boxed_button">
                <a href="img/cv/1.jpg" download>
                  Download Resume{" "}
                  <img className="svg" src="img/svg/paper.svg" alt="" />
                </a>
              </div> */}
              <Image
                src="/img/signature.webp"
                alt="Signature"
                width={155}
                height={32}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
