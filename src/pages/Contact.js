import React, {useState} from "react";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import "../components/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({name: "", email: "", message: ""})
 
  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();

    axios({
      method: "POST",
      url: "URLOFBACKEND/email",
      data: formData
    }).then(response => {
      console.log("response:", response);
      if (response.data.message === "success") {
        alert("Message Sent.");
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      } 
    }).then(() => setFormData({name: "", email: "", message: ""}))
  };
  return (
    <React.Fragment>
      {console.log(formData)}
      <Typography
        variant="h2"
        display="block"
        align="center"
        id="contact-us"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase",
        }}
      >
        <h1>Contact Me</h1>
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px"
        }}
      >
        <form
          onSubmit={e => handleSubmit(e)}
          className="contact-form"
          id="contact-form"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            padding: "25px",
            borderRadius: "10px"
          }}
        >
          <TextField name = "name" onChange={e => handleInputChange(e)}
            label="Name"
            type="text"
            margin="normal"
            variant="outlined"
            id="name"
            placeholder="Enter your name"
          />
          <TextField name = "email" onChange={e => handleInputChange(e)}
            label="Email"
            type="email"
            id="email"
            margin="normal"
            variant="outlined"
            placeholder="Enter your email"
          />
          <TextField name = "message" onChange={e => handleInputChange(e)}
            label="Message"
            id="message"
            multiline
            margin="normal"
            variant="outlined"
            placeholder="Enter your message"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              size="large"
              type="submit"
              style={{ width: "50%", marginTop: "15px" }}
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}