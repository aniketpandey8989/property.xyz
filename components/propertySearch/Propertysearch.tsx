import { Form } from "react-bootstrap";
import Link from "next/link";

export default function Propertysearch() {
  return (
    <div className="property-hide">
      <div className="flex-style pt-2">
        <div className="property-line">
          <div  className="drop-field">
            Property postcode
            <div className="form-group mt-2 ">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  className="border-hide "
                  placeholder="e.g CH5 387"
                />
              </Form.Group>{" "}
            </div>
          </div>
          <div>
            <div className="line1"></div>
          </div>
        </div>
        <div className="property-line">
          <div className="drop-field">
            Property type
            <Form.Select
              aria-label="Default select example"
              className="border-hide  mt-2  "
            >
              <option>Please select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <div>
            <div className="line1"></div>
          </div>
        </div>
        <div  className="drop-field">
          No. of beds
          <Form.Select
            aria-label="Default select example"
            className="border-hide  mt-2  "
          >
            <option>Please select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        <div className="btn-center">
          <Link href="/searchResult">
            <button type="button" className="btn btn-danger search-btn">
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
