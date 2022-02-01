import type { NextPage } from "next";
import React from "react";
const Home: NextPage = () => {
  return (
    <div className="container-fluid">
      <div className="row bg-white">
        <div className="col-lg-12 ">
          <div className="beta-heading  my-1 ">
            <span className="beta ">BETA</span>
            This is new service, please leave your feadback
          </div>
        </div>
      </div>
      <div className="row">
        <div className="bg-color ">
          <div className="col-lg-12 ">
            <div className="text-style mt-5 mb-5">
              <h2>
                Check your free instant your property valuation in less then 30
                seconds
              </h2>
              <p>
                Whether you are looking to buy a property,sell your property or
                considering getting a mortage. a quick check on your property
                value can help you see what is possible
              </p>
            </div>
          </div>
          <div className="flex-style py-4">
            <div>
              Property postcode
              <div className="form-group mt-2 ">
                {/* <input type="email" className="form-control  border-hide" placeholder="e.g CH5 387 "> */}
              </div>
            </div>
            <div>
              Property type
              <select
                className="form-select mt-2   border-hide"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div>
              No. of beds
              <select
                className="form-select mt-2  border-hide"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="btn-center">
              <button type="button" className="btn btn-danger search-btn">
                Search
              </button>
            </div>
          </div>
          <div className="powered my-4">
            <span>Powered By</span>
            {/* <img src="image/swrib.png" className="swrib-img ml-5" alt="Responsive image"> */}
          </div>
          <div className="img-center my-5">
            {/* <img src="image/img.png" className="img-fluid" alt="Responsive image"> */}
          </div>
          <div className="bg-blue py-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
