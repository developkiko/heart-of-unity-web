import React, { FC, useState } from "react";
import styles from "./HeaderMobile.module.scss";
import Logo from "../../../UI/Logo/Logo";
import Burger from "../../Icons/Burger";
import dynamic from "next/dynamic";

const Dropdown = dynamic(import("./Dropdown/Dropdown"), {
  ssr: false
});

const HeaderMobile: FC = () => {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);

  return (
    <header className={styles.mobile}>
      <Logo />
      <button onClick={() => setIsDropdown(true)}>
        <Burger />
      </button>
      <Dropdown
        isDropdown={isDropdown}
        setIsDropdown={setIsDropdown}
      />
    </header>
  );
};

export default HeaderMobile;
