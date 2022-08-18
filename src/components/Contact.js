const Contact = () => {
  return (
    <div className="orido_tm_section" id="contact">
      <div className="orido_tm_contact">
        <div className="container">
          <div className="infobox">
            <div className="text">
              <h3>{`Let's`} work together</h3>
              <p>
                Please feel free to message me on my social platforms or send me an email with any questions you may have. 
              </p>
            </div>
          </div>
          <div className="connect">
            <div className="left">
              <ul>
                {/* <li>
                  <span className="name">Call:</span>
                  <p>
                    <a className="line_effect" href="#">
                      +1 (234) 567 890
                    </a>
                  </p>
                </li> */}
                <li>
                  <span className="name">Email:</span>
                  <p>
                    <a className="line_effect" href="mailto:emmanueltolani17@gmail.com">
                      emmanueltolani17[at]gmail.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="orido_tm_follow">
                <span>Follow me:</span>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/emmanuel-tolani/"  target={'_blank'}>
                      <img className="svg" src="img/svg/linkedin-in-brands.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://dribbble.com/tolanie/collections"  target={'_blank'}>
                      <img
                        className="svg"
                        src="img/svg/social/dribbble.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/EmmanuelTolani/" target={'_blank'}>
                      <img
                        className="svg"
                        src="img/svg/github-alt-brands.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="element">
          <img className="svg" src="img/svg/elements.svg" alt="" />
        </span>
        <span className="element2">
          <img className="svg" src="img/svg/element-2.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default Contact;
