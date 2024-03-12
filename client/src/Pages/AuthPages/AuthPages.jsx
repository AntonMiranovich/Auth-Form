import Header from "../../Component/Header/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

function AuthPages() {
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
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Your email"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Must be at least 8 characters."
            variant="outlined"
          />
        </div>

        <Button
          style={{ width: "15%", marginLeft: "auto" }}
          variant="contained"
        >
          Continue
        </Button>
        <p style={{ textAlign: "end" }}>
          Not registered yet?{' '}
          <Link style={{ font: '600 16px "Inter"' }} to={"/reg"}>
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}

export default AuthPages;
