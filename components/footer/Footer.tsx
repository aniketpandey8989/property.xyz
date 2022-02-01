import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div>
      <div className="bg-blue py-4">
        <div className="property">
          <h5>Property.xyz</h5>
          <p className="property-style hide-text">Property investors sign up</p>
          <p className="property-style hide-text">Sell your property </p>
          <p className="property-style">About</p>
          <p className="property-style">Contact us</p>
          <p className="property-style">Feedback</p>
          <div className="d-flex hide-icon ">
              <FontAwesomeIcon className="facebook " icon={faFacebook} />
              <FontAwesomeIcon className="facebook " icon={faLinkedin} />
              <FontAwesomeIcon className="facebook " icon={faYoutube} />
            </div>
        </div>
       
      </div>
      <div className="bg-grey">
        <div className="property  py-4">
          <div className="footer-flex">
            <div className="d-flexstyle">
              <p className="footer-text">Sitemap</p>
              <p className="footer-text">Privacy policy </p>
              <p className="footer-text">Terms of use</p>
              <p className="footer-text"> Cookie Policy</p>
              <p className="footer-text">Data Sources</p>
            </div>
            <div className="d-flex social-icon">
              <p className="footer-text hide-text">Follow us on social media</p>
              <FontAwesomeIcon className="facebook " icon={faFacebook} />
              <FontAwesomeIcon className="facebook " icon={faLinkedin} />
              <FontAwesomeIcon className="facebook " icon={faYoutube} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
