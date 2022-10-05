const About = () => {
  return (
    <div className="orido_tm_section" id="about">
      <div className="orido_tm_about">
        <div className="about_in">
          <div className="left">
            <div className="box">
              <h3 className="year">2</h3>
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
                Hello, my name is Ron Tolani.
                I have been working as a professional Software Developer for 2 years. During this time, I have worked on several side projects with various different technologies. 
                For fun I love traveling, playing basketball, and working on amazing projects.
              </p>
            </div>
            <div className="short">
              {/* <div className="orido_tm_boxed_button">
                <a href="img/cv/1.jpg" download>
                  Download Resume{" "}
                  <img className="svg" src="img/svg/paper.svg" alt="" />
                </a>
              </div> */}
              <img src="img/signature.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
