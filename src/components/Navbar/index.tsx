import { Link } from "react-router-dom";
import styled from "./index.module.scss";

export const Navbar = () => {
  return (
    <ul className={styled.nav}>
      <li>
        <Link to='/home'>
          Home<span style={{ margin: "0 .5rem" }}>|</span>{" "}
        </Link>
      </li>
      <li>
        <Link to='/home/form'>
          Form<span style={{ margin: "0 .5rem" }}>|</span>
        </Link>
      </li>
      <li>
        <Link to='/home/modal'>
          Modal<span style={{ margin: "0 .5rem" }}>|</span>
        </Link>
      </li>
      <li>
        <Link to='/home/api'>
          Api<span style={{ margin: "0 .5rem" }}>|</span>
        </Link>
      </li>
      <li>
        <Link to='/home/wizardForm'>
          Wizard Form<span style={{ margin: "0 .5rem" }}>|</span>
        </Link>
      </li>
    </ul>
  );
};
