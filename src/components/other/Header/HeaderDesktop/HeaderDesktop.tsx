import React, { FC } from "react";
import styles from "./HeaderDesktop.module.scss";
import Logo from "../../../UI/Logo/Logo";
import Link from "next/link";
import Button from "../../../UI/Button/Button";

const HeaderDesktop: FC = () => {
  return (
    <header className={styles.desktop}>
      <div className={styles.about}>
        <Logo />
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link href="/#categories" scroll={false}>
                Пожертвовать
              </Link>
            </li>
            <li>
              <Link href="/#form" scroll={false}>
                Задать вопрос
              </Link>
            </li>
            <li>
              <Link href="/contacts#header">Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.actions}>
        <Button
          onClick={() => (document.location.href = "tel:380999999999")}
          className={styles.phone}
          primary
        >
          +38 (099) 999-99-99
        </Button>
      </div>
    </header>
  );
};

export default HeaderDesktop;
