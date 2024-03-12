import Button from "@mui/material/Button";
import style from "./style.module.scss";

function Header() {
  return (
      <div className={style.wrapper}>
        <Button variant="text">Sign In</Button>
        <Button variant="text">Sign up</Button>
      </div>
  );
}

export default Header;
