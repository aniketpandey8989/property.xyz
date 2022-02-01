import { Form } from "react-bootstrap";

export default function Propertysearch() {
  return (
    <div>
      <div className="flex-style py-4">
        <div>
          Property postcode
          <div className="form-group mt-2 ">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                className="border-hide "
                placeholder="e.g CH5 387"
              />
            </Form.Group>{" "}
          </div>
        </div>
        <div>
          Property type
          <Form.Select aria-label="Default select example"   className="border-hide  mt-2  ">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        <div>
          No. of beds
          <Form.Select aria-label="Default select example"   className="border-hide  mt-2  ">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        <div className="btn-center">
          <button type="button" className="btn btn-danger search-btn">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
