import Link from "next/link";
import Feedback from "../components/feedback/Feedback";
import Propertysearch from "../components/propertySearch/Propertysearch";
import Footer from "../components/footer/Footer";
import { Tabs, Image } from "react-bootstrap";

const Tab = ({ href, isSelected, title }: any) => (
  <Link href={href}>
    <a
      style={{
        padding: 5,
        margin: 5,
        backgroundColor: isSelected ? "blue" : "transparent",
      }}
    >
      {title}
    </a>
  </Link>
);

export default function Home() {
 
  return (
    <div className="container-fluid">
      <Feedback />
      <Propertysearch />
      <div className="row">
        <div className="bg-color  ">
          <div className="col-lg-12 ">
            <div className="tab-section my-4">
              <Tabs
                defaultActiveKey="Property Estimate"
                id="uncontrolled-tab-example"
                className="mb-3 mob-tab"
              >
                <Tab eventKey="Property Estimate" title="Property Estimate">
                  <div className="mt-5">
                    <h6 className="price">Estimated Price</h6>
                    <h1>
                      <div>
                        <h6 className="estimate-price">£200,000 - £230,000k</h6>
                        <h6 className="per-level ">81% confidence level</h6>
                        <div className="powered mt-4">
                          <span className="powered-by">Powered By</span>
                          <Image
                            src="https://i.postimg.cc/5yFSMz35/swrib.png"
                            className="swrib-img "
                          />
                        </div>
                        <div className="timeline-center">
                          <div className="time-circle"></div>
                          <div className="line"></div>
                          <div className="time-circle1"></div>
                        </div>

                        <div className="get-next my-5">
                          <h3 className="so-text">So, What Next?</h3>
                          <p className="get-text">
                            Get an even more accurate valuation. Speak with a
                            human
                          </p>
                          <h6 className="tab-style">
                            Our partners check many datasets, property sales and
                            recent valuations to create an instant estimate.
                            This is great as a quick guide but shouldn't be
                            wholly relied upon if you are purchasing a property,
                            selling a property or getting finance. For any of
                            these speaking with a human is always best. Please
                            select from any of the below to help your next step
                          </h6>
                        </div>
                      </div>
                    </h1>
                  </div>
                </Tab>
                <Tab eventKey="Rental Estimate" title="Rental Estimate">
                  <div  className="mt-5">
                    <h6 className="price">Estimated Price</h6>
                    <h1>
                      <div>
                        <h6 className="estimate-price">£1000pcm</h6>
                        <h6 className="per-level ">81% confidence level</h6>
                        <div className="timeline-center hide-timeline">
                          <div className="time-circle"></div>
                          <div className="line"></div>
                          <div className="time-circle1"></div>
                        </div>
                        <div className="hr-line my-5"></div>
                      
                        <div className="get-next my-5">
                        <div className="text-hide">
                        <h3 className="so-text">So, What Next?</h3>
                          <p className="get-text">
                            Get an even more accurate valuation. Speak with a
                            human
                          </p>
                        </div>
                          <h6 className="tab-text">
                            Our partners check many datasets, property sales and
                            recent valuations to create an instant estimate.
                            This is great as a quick guide but shouldn't be
                            wholly relied upon if you are purchasing a property,
                            selling a property or getting finance. For any of
                            these speaking with a human is always best. Please
                            select from any of the below to help your next step
                          </h6>
                        </div>
                        <div className="powered mt-4">
                          <span className="powered-by">Powered By</span>
                          <Image
                            src="https://i.postimg.cc/5yFSMz35/swrib.png"
                            className="swrib-img "
                          />
                         
                        </div>
                      </div>
                    </h1>
                  </div>
                </Tab>
              </Tabs>
            </div>

            <div className="img-flex">
              <div className="sell-property ">
                <Image
                  src="https://i.postimg.cc/QChfZwG3/3.jpg"
                  className="bg-text"
                />
                <div className="img-text">
                  <h5>Looking to sell?</h5>
                  <p className="property-text">
                    Sell any UK  residancy property in{" "}
                    <span>just 7-28 days</span>
                  </p>
                  <button type="button" className="btn btn-danger sell-btn">
                    Sell Property
                  </button>
                </div>
              </div>
              <div className="sell-property ">
                <Image
                  src="https://i.postimg.cc/5tfyvmVt/1.jpg"
                  className="bg-text"
                />
                <div className="img-text">
                  <h5>How much can I borrow?</h5>
                  <p className="property-text">
                    Work out how much you can borrow{" "}
                    <span>for your next property</span>
                  </p>
                  <button type="button" className="btn btn-danger sell-btn">
                    Sign up to buy
                  </button>
                </div>
              </div>
              <div className="sell-property ">
                <Image
                  src="https://i.postimg.cc/mkLy59CZ/2.jpg"
                  className="bg-text "
                />
                <div className="img-text">
                  <h5>Buying property?</h5>
                  <p className="property-text">
                    Sign up to receive alerts about the{" "}
                    <span>UK’s best buy-to-let properties.</span>
                  </p>
                  <button type="button" className="btn btn-danger sell-btn">
                    Sign up to buy
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
