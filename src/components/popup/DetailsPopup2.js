import Popup from "./Popup";
import Image from "next/image";
const DetailsPopup = ({ open, close }) => {
  return (
    <Popup open={open} close={close}>
      <div className="popup_details">
        <div className="top_image">
          <Image
            src="/img/portfolio/leswan.png"
            alt="leSwan project details"
            height={400}
            width={600}
            objectFit="contain"
          />
          <div
            className="main"
            data-img-url="img/portfolio/leswan.png"
            style={{
              backgroundImage: 'url("img/portfolio/leswan.png")',
            }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3>Le Swan</h3>
          <span>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Website
            </a>
          </span>
          <div />
        </div>
        <div className="main_details">
          <div className="textbox">
            <p>My role was to create a responsive modern restaurant website.</p>
            <p>
              The main difficulty of the rest was making sure it was responsive.
              This process required me to test the site on many different screen
              sizes and many different web browsers.
            </p>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">View Live:</span>
                <span>
                  <a href="https://leswan.netlify.app/" target={"_blank"}>
                    LeSwan
                  </a>
                </span>
              </li>
              <li>
                <span className="first">Github:</span>
                <span>
                  <a
                    href="https://github.com/EmmanuelTolani/leSwan"
                    target={"_blank"}
                  >
                    View Code
                  </a>
                </span>
              </li>
              <li>
                <span className="first">Notable Features</span>
                <span>
                  Responsive<br></br>
                </span>
                <span>Pixel Perfect</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="additional_images">
          <ul>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <Image
                    src="/img/portfolio/leswan-3.png"
                    alt="leSwan project details"
                    height={300}
                    width={300}
                    objectFit="contain"
                  />
                  <div
                    className="main"
                    data-img-url="img/portfolio/leswan-3.png"
                    style={{
                      backgroundImage: 'url("img/portfolio/leswan-3.png")',
                    }}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <Image
                    src="/img/portfolio/leswan-2.png"
                    alt="leSwan project details"
                    height={300}
                    width={300}
                    objectFit="contain"
                  />
                  <div
                    className="main"
                    data-img-url="img/portfolio/leswan-2.png"
                    style={{
                      backgroundImage: 'url("img/portfolio/leswan-2.png")',
                    }}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <Image
                    src="/img/portfolio/leswan-1.png"
                    alt="leSwan project details"
                    height={300}
                    width={300}
                    objectFit="contain"
                  />
                  <div
                    className="main"
                    data-img-url="img/portfolio/leswan-1.png"
                    style={{
                      backgroundImage: 'url("img/portfolio/leswan-1.png")',
                    }}
                  />
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
