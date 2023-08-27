import React, { FC } from "react";

import { motion } from "framer-motion";

import styles from "./ContactsSection.module.scss";

import InputSecondary from "../../../UI/Input/InputSecondary/InputSecondary";
import Button from "../../../UI/Button/Button";
import Arrow from "../../../other/Icons/Arrow";
import Phone from "../../../other/Icons/Phone";
import Mail from "../../../other/Icons/Mail";
import Geo from "../../../other/Icons/Geo";

const ContactsSection: FC = () => {
  return (
    <motion.section
      initial={{ translateX: "200px", opacity: 0 }}
      whileInView={{ translateX: "0px", opacity: 1 }}
      viewport={{ once: true }}
      className={styles.section}
    >
      <div className={styles.form}>
        <div>
          <h4 className={styles.heading}>Остались вопросы?</h4>
          <p>
            Свяжитесь с нами, отправив ваше имя и номер телефона и в ближайшее
            время менеджер свяжется с вами и ответит на все ваши вопросы
          </p>
        </div>
        <form>
          <div>
            <InputSecondary title="Имя" placeholder="Введите ваше имя" />
            <InputSecondary
              title="Номер телефона"
              type="tel"
              placeholder="Введите номер вашего телефона"
            />
          </div>
          <Button primary>
            Записаться <Arrow />
          </Button>
        </form>
      </div>
      <div className={styles.info}>
        <h5>Контактные данные</h5>
        <ul>
          <li>
            <span>
              <Phone /> <h6>Позвони сейчас</h6>
            </span>
            <span>
              <a href="tel:380999999999">+38 (099) 999-99-99</a>
            </span>
            <span>
              <a href="tel:380666666666">+38 (066) 666-66-66</a>
            </span>
          </li>
          <li>
            <span>
              <Mail /> <h6>Email</h6>
            </span>
            <span>
              <a href="mailto:support@heart-of-unity.org">support@heart-of-unity.org</a>
            </span>
            <span>
              <a href="mailto:info@heart-of-unity.org">info@heart-of-unity.org</a>
            </span>
          </li>
          <li>
            <span>
              <Geo /> <h6>Местоположение</h6>
            </span>
            <span>
              <a
                href="https://goo.gl/maps/zrUXPfqv5tczGg737"
                rel="noreferrer"
                target="_blank"
              >
                Днепр, пр. Гагарина 26
              </a>
            </span>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default ContactsSection;
