import React from "react";
import * as style from "./Header.module.scss";
import { LogoutOutlined } from "@ant-design/icons";

function Header({ logOut }) {
  return (
    <header className={style.header}>
      <button onClick={logOut} className={style.btn}>
        LogOut <LogoutOutlined />
      </button>
    </header>
  );
}

export default Header;
