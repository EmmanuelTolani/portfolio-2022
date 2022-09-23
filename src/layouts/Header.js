const Header = ({ dark }) => {
  return (
    <div className="orido_tm_header">
      <div className="header_in">
        <div className="logo">
          <a href="#">Tolani</a>
        </div>
        <div className="menu">
          <ul className="anchor_nav">
            <li className="current">
              <a href="#home" alt="home">
                Home
              </a>
            </li>
            <li>
              <a href="#about" alt="about">
                About
              </a>
            </li>
            {/* <li>
              <a href="#service">Service</a>
            </li> */}
            <li>
              <a href="#portfolio" alt="portfolio">
                Portfolio
              </a>
            </li>
            {/* <li>
              <a href="#blog">Blog</a>
            </li> */}
            <li>
              <a href="#contact" alt="contact">
                Contact
              </a>
            </li>
          </ul>
          <span className="ccc" />
        </div>
      </div>
    </div>
  );
};
export default Header;
