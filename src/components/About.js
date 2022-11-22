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
                Hello, my name is Emmanuel Tolani. I am a HTML Email Developer
                with a comprehensive understanding of email design. From
                translating design mockups into HTML email documents, I create
                original and effective designs that take all project
                deliverables into account. Personal development is very
                important to me and I'm constantly improving my skills and
                knowledge to get the best results from every campaign. My
                meticulous attention to detail and ability to work within tight
                deadlines ensures I deliver projects on time, on budget, and on
                specification.
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
