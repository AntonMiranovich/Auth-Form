import Header from "../../Component/Header/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function AuthPages() {
  const [data, setData] = useState({});

  function checkInp(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function sendARequest() {
    const response = await axios.post("http://localhost:3000/user/auth", data, {
      withCredentials: true,
    });
    console.log(response);
  }

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <h1>Sign In</h1>
        <p>
          Log in to access your account or create one. Verify your email for
          seamless access.
        </p>
        <div>
          <TextField
            onChange={checkInp}
            style={{ width: "100%" }}
            name="email"
            id="outlined-basic"
            label="Your email"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            onChange={checkInp}
            style={{ width: "100%" }}
            id="outlined-basic"
            name="password"
            label="Must be at least 8 characters."
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
          <Link style={{ font: '600 16px "Inter"' }} to={"/reg"}>
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}

export default AuthPages;
