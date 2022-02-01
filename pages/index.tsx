import type { NextPage } from "next";
import Feedback from "../components/feedback/Feedback";
import Propertysearch from "../components/propertySearch/Propertysearch";
import Footer from "../components/footer/Footer";
import { Image } from "react-bootstrap";
import React from "react";
const Home: NextPage = () => {
  return (
    <div className="container-fluid">
      <Feedback />

      <div className="row">
        <div className="bg-color ">
          <div className="col-lg-12 ">
            <div className="text-style mt-5 mb-5">
              <h2 className="heading-style">
                Check your free instant your property valuation in less then 30
                seconds
              </h2>
              <p className="paragraph-style">
                Whether you are looking to buy a property,sell your property or
                considering getting a mortage. a quick check on your property
                value can help you see what is possible
              </p>
            </div>
          </div>

          <Propertysearch />
          <div className="powered mt-4">
            <span>Powered By</span>
            <Image
              src="https://i.postimg.cc/5yFSMz35/swrib.png"
              className="swrib-img "
            />
          </div>
          <div className="img-center mt-5">
            <Image
              src="https://i.postimg.cc/9MwLcsXq/img.png"
              className="img-fluid"
            />
          </div>
          <Footer />
          {/* <div className="bg-blue py-4">
            <div className="property">
              <h5>Property xyz</h5>
              <p className="property-style">Property investors sign up</p>
              <p className="property-style">Sell your property </p>
              <p className="property-style">About</p>
              <p className="property-style">Contact us</p>
              <p className="property-style">Feedback</p>
            </div>
          </div>
          <div className="bg-grey py-4">
            <div className="property">
              <h5>Property xyz</h5>
              <div className="footer-flex">
                <div className="d-flexstyle">
                  <p className="property-style">Sitemap</p>
                  <p className="property-style">Privacy policy </p>
                  <p className="property-style">Terms of use</p>
                  <p className="property-style"> Cookie Policy</p>
                  <p className="property-style">Data Sources</p>
                </div>
                <div className="d-flex">
                  <p className="property-style">Property investors sign up</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
