import Popup from "./Popup";
const DetailsPopup = ({ open, close }) => {
  return (
    <Popup open={open} close={close}>
      <div className="popup_details">
        <div className="top_image">
          <img src="img/portfolio/pronedrone.webp" alt="" />
          <div
            className="main"
            data-img-url="img/portfolio/pronedrone.webp"
            style={{ backgroundImage: 'url("img/portfolio/pronedrone.webp")' }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3>ProOne Drones</h3>
          <span>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Landing Page
            </a>
          </span>
          <div />
        </div>
        <div className="main_details">
          <div className="textbox">
            <p>
              My role was to create a responsive modern landing page with smooth animations.
            </p>
            <p>
            The main difficulty of the landing page was making sure it was responsive. This process required me to test the site on many different screen sizes and many different web browsers.
            </p>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">View Live:</span>
                <span>
                <a href="https://pronedrones.netlify.app/" target={'_blank'}>ProneDrones</a>
                </span>
              </li>
              <li>
                <span className="first">Github:</span>
                <span>
                  <a href="https://github.com/EmmanuelTolani/drone-landingpage" target={'_blank'}>View Code</a>
                </span>
              </li>
              <li>
                <span className="first">Notable Features</span>
                <span>Responsive<br></br></span>
                <span>JS Animations</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="additional_images">
          <ul>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/portfolio/pronedrone-3.webp" alt="" />
                  <div className="main" data-img-url="img/portfolio/pronedrone-3.webp" style={{ backgroundImage: 'url("img/portfolio/pronedrone-3.webp")' }} />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/portfolio/pronedrone-2.webp" alt="" />
                  <div className="main" data-img-url="img/portfolio/pronedrone-2.webp" style={{ backgroundImage: 'url("img/portfolio/pronedrone-2.webp")' }}/>
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/portfolio/pronedrone-1.webp" alt="" />
                  <div className="main" data-img-url="img/portfolio/pronedrone-1.webp" style={{ backgroundImage: 'url("img/portfolio/pronedrone-1.webp")' }}/>
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
