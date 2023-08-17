import { changeLanguage } from "i18next";
import { ChangeEvent, ChangeEventHandler } from "react";
import { Link } from "react-router-dom";
import styled from "./index.module.scss";

export const Navbar = () => {
  const changeLangHandler = ((e: ChangeEvent<HTMLInputElement>) => {
    changeLanguage(e.target.value);
  }) as ChangeEventHandler;

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
      <li>
        <Link to='/home/counterPage'>
          Counter<span style={{ margin: "0 .5rem" }}>|</span>
        </Link>
      </li>
      <li>
        <Link to='/home/todoPage'>
          Todo<span style={{ margin: "0 .5rem" }}>|</span>
        </Link>
      </li>
      <li>
        <select onChange={changeLangHandler} defaultValue='en'>
          <option value='en'>English</option>
          <option value='tw'>Chinese</option>
        </select>
      </li>
    </ul>
  );
};
