import Popup from "./Popup";
const DetailsPopup = ({ open, close }) => {
  return (
    <Popup open={open} close={close}>
      <div className="popup_details">
        <div className="top_image">
          <img src="img/portfolio/hbo.webp" alt="" />
          <div
            className="main"
            data-img-url="img/portfolio/hbo.webp"
            style={{ backgroundImage: 'url("img/portfolio/hbo.webp")' }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3>HBO</h3>
          <span>
            <a href="#" onClick={(e) => e.preventDefault()}>
              App
            </a>
          </span>
          <div />
        </div>
        <div className="main_details">
          <div className="textbox">
            <p>
            My role was to create a movie streaming platform that had key features from HBO. I used the movie database API to dynamically display information about thousands of movies.
            </p>
            <p>
            The main difficulty of the streaming platform was creating the different features like the create user, searching for a movie, and adding to a watch list.
            </p>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">View Live</span>
                <span>
                <a href="https://hbo-maxd.netlify.app" target={'_blank'}>HBO</a>
                </span>
              </li>
              <li>
                <span className="first">Creator</span>
                <span>
                  <a href="https://github.com/EmmanuelTolani/hbo-react-clone" target={'_blank'}>View Code</a>
                </span>
              </li>
              <li>
                <span className="first">Notable Features</span>
                <span>Create Account<br></br></span>
                <span>Search Movies<br></br></span>
                <span>My list<br></br></span>
                <span>Movie Cast<br></br></span>
                <span>Logout</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="additional_images">
          <ul>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/portfolio/hbo-3.webp" alt="" />
                  <div className="main" data-img-url="img/portfolio/hbo-3.webp" style={{ backgroundImage: 'url("img/portfolio/hbo-3.webp")' }}  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/portfolio/hbo-1.webp" alt="" />
                  <div className="main" data-img-url="img/portfolio/hbo-1.webp" style={{ backgroundImage: 'url("img/portfolio/hbo-1.webp")' }} />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/portfolio/hbo-2.webp" alt="" />
                  <div className="main" data-img-url="img/portfolio/hbo-2.webp" style={{ backgroundImage: 'url("img/portfolio/hbo-2.webp")' }}/>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Popup>
  );
};
export default DetailsPopup;
