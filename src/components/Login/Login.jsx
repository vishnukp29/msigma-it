import React from "react";
import style from "./Login.module.scss";
import clsx from "clsx";

export default function Login() {
  return <div className={clsx(style.wrapper, "withPadding")}>Login Page</div>;
}
