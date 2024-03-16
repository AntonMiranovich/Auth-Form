import Header from "../../Component/Header/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function RegPages() {
  const [data, setData] = useState({});

  function changeState(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function sendARequest() {
    const response = await axios.post("http://localhost:3000/user/", data);
    console.log(response);
  }

  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <h1>Welcome, let's create an account</h1>
        <p>
          Create an account to keep track of your customers, and contributors.
          Once your account has been created then don’t forget to verify your
          account through mail.
        </p>

        <div className={style.name}>
          <TextField
            onChange={changeState}
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Name"
            name="name"
            variant="outlined"
          />
          <TextField
            onChange={changeState}
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Surname"
            name="surname"
            variant="outlined"
          />
        </div>

        <div>
          <TextField
            onChange={changeState}
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Your email"
            name="email"
            variant="outlined"
          />
        </div>

        <div>
          <TextField
            onChange={changeState}
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Must be at least 8 characters."
            name="password"
            variant="outlined"
          />
        </div>

        <Button
          onClick={sendARequest}
          style={{ width: "15%", marginLeft: "auto" }}
          variant="contained"
        >
          Continue
        </Button>

        <p style={{ textAlign: "end" }}>
          Not registered yet?{" "}
          <Link style={{ font: '600 16px "Inter"' }} to={"/"}>
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
}

export default RegPages;
