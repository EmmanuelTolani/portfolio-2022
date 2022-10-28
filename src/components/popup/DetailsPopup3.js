import Popup from "./Popup";
const DetailsPopup = ({ open, close }) => {
  return (
    <Popup open={open} close={close}>
      <div className="popup_details">
        <div className="top_image">
          <img src="img/portfolio/anki.png" alt="" />
          <div
            className="main"
            data-img-url="img/portfolio/anki.png"
            style={{ backgroundImage: 'url("img/portfolio/anki.png")' }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3>Anki</h3>
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
              My role was to create a responsive quiz web app. The web app features a responsive website and 2 different quizzes.
            </p>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">View Live:</span>
                <span>
                <a href="https://ankii.netlify.app/" target={'_blank'}>Anki</a>
                </span>
              </li>
              <li>
                <span className="first">Github:</span>
                <span>
                  <a href="https://github.com/EmmanuelTolani/test-app" target={'_blank'}>View Code</a>
                </span>
              </li>
              <li>
                <span className="first">Notable Features</span>
                <span>Responsive<br></br></span>
                <span>Pixel Perfect<br></br></span>
                <span>Quiz<br></br></span>
                <span>Results</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="additional_images">
          <ul>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/portfolio/anki-3.png" alt="" />
                  <div className="main" data-img-url="img/portfolio/anki-3.png" style={{ backgroundImage: 'url("img/portfolio/anki-3.png")' }} />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/portfolio/anki-2.png" alt="" />
                  <div className="main" data-img-url="img/portfolio/anki-2.png" style={{ backgroundImage: 'url("img/portfolio/anki-2.png")' }}/>
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/portfolio/anki-1.png" alt="" />
                  <div className="main" data-img-url="img/portfolio/anki-1.png" style={{ backgroundImage: 'url("img/portfolio/anki-1.png")' }}/>
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
