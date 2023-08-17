import { changeLanguage } from "i18next";
import { ChangeEvent, ChangeEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "./index.module.scss";
import { routerConfig } from "@/router";

type RouteType = {
  index?: boolean;
  path?: string;
  element: JSX.Element;
  children?: RouteType[];
};

export const Navbar = () => {
  const changeLangHandler = ((e: ChangeEvent<HTMLInputElement>) => {
    changeLanguage(e.target.value);
  }) as ChangeEventHandler;

  const changeRouteToLink = (children: RouteType[], path = ""): ReactNode => {
    return children.map((child) => {
      if (child.children) return changeRouteToLink(child.children, child.path);
      if (path && path !== "/" && !child.path?.includes("/:")) {
        return (
          <Link key={child.path || ""} to={`/${path}/${child.path || ""}`}>
            {child.path || "home"}
            <span style={{ margin: "0 .5rem" }}>|</span>
          </Link>
        );
      }
    });
  };

  return (
    <ul className={styled.nav}>
      {changeRouteToLink(routerConfig, "/")}
      <li>
        <select onChange={changeLangHandler} defaultValue='en'>
          <option value='en'>English</option>
          <option value='tw'>Chinese</option>
        </select>
      </li>
    </ul>
  );
};
