import type { NextPage } from "next";
import Feedback from "../components/feedback/Feedback";
import Propertysearch from "../components/propertySearch/Propertysearch";
import Footer from "../components/footer/Footer";
import { Image } from "react-bootstrap";
import React from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { query } = useRouter();
  return (
    <div className="container-fluid">
      <Feedback />
      <div className="row">
        <div className="bg-color ">
          <div className="col-lg-12 ">
            <div className="text-style mt-5 mb-5">
              <h2 className="heading-style">
                Check your free instant property valuation in less than 30
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
        </div>
      </div>
    </div>
  );
};

export default Home;
