import React, { FC } from "react";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";
import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <div id="header" className={styles.header}>
      <HeaderMobile />
      <HeaderDesktop />
    </div>
  );
};

export default Header;
