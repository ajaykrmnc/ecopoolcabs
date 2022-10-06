import React, { useState, useEffect } from "react";
import { API } from "config";
import { Container, Row, Col, Alert, Form, Button } from "react-bootstrap";
import Footercontact from "components/Footer/Footercontact";


const createcontactus = (values) => {
  // console.log(values);

  return fetch(`${API}/contact`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const clickSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    // console.log("submitted");
    createcontactus(values).then((data) => {
      if (data.error) {
        setError(true);
        console.log("error in front");
      } else {
        // setError("");
        // setSuccess(true);
        setSuccess(true);
        console.log("success in front");
      }
    });
  };
  const showError = () => {
    if (error) {
      return <h3 className="bg-danger rounded">There is ERROR!</h3>;
    }
  };
  const showSuccess = () => {
    if (success) {
      return (
        <h3 className="bg-success rounded">
          Your Comment has been sent.Thank You!
        </h3>
      );
    }
  };
  const handleChange = (data) => (e) => {
    const value = e.target.value;
    setError(false);
    setSuccess(false);
    setValues({ ...values, [data]: value });
  };
  const formdata = () => {
    return (
      <div className="contanct d-flex bg-light justify-content-between">
        <div className="d-flex justify-contnet-center">
          <div className="bg-warning h-100" style={{width: '40px'}}>
          </div>
          <div className="container m-4">
          <h2 className="fw-bold">Get in Touch</h2>
          <h5>Send us a message and we will get back to you as soon as possible!</h5>
          <p>Call us at</p>
          <h6>+917492872058</h6>
          <Footercontact/>
          </div>
         

        </div>
        <div >
        <div className="m-4">
          <h2 className="fw-bold">Drop An Enquiry</h2>
          <Form
            onSubmit={clickSubmit}
          >
            <Form.Group controlId="form.Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                style={{ width: "40vw" }}
                type="text"
                placeholder="Enter name"
                onChange={handleChange("name")}
              />
            </Form.Group>
            <Form.Group controlId="form.Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                style={{ width: "40vw" }}
                type="email"
                placeholder="name@example.com"
                onChange={handleChange("email")}
              />
            </Form.Group>
            <Form.Group controlId="form.Textarea">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                style={{ width: "40vw" }}
                as="textarea"
                rows={3}
                onChange={handleChange("content")}
              />
            </Form.Group>
            <Button
              style={{ marginTop: "10px" }}
              variant="primary"
              class="btn btn-success btn-block"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
         </div>

      </div>
      
    );
  };
  return (
    <div>
       
    

    
      {showSuccess()}
      {showError()}
      {formdata()}

    </div>
  );
};

export default Contact;
