import React, { FC } from "react";
import { motion } from "framer-motion";

import styles from "./FormSection.module.scss";
import Heading from "../../../UI/Heading/Heading";
import InputSecondary from "../../../UI/Input/InputSecondary/InputSecondary";
import Radio from "../../../UI/Radio/Radio";
import LongArrow from "../../../other/Icons/LongArrow";

const FormSection: FC = () => {
  return (
    <motion.section
      initial={{ translateX: "-200px", opacity: 0 }}
      whileInView={{ translateX: "0px", opacity: 1 }}
      viewport={{ once: true }}
      className={styles.section}
      id="form"
    >
      <Heading>Заполните форму, что бы оставить заявку</Heading>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <InputSecondary
            required
            title="Имя"
            placeholder="Введите ваше имя"
            dark
            name="name"
          />
          <InputSecondary
            required
            title="Возраст"
            type="number"
            placeholder="Введите кол-во полных лет"
            name="age"
            dark
          />
          <InputSecondary
            required
            title="Номер телефона"
            type="tel"
            placeholder="Введите номер вашего телефона"
            dark
            name="tel"
          />
          <InputSecondary
            required
            title="Электронная почта"
            type="email"
            placeholder="Введите вашу эл. почту"
            dark
            name="email"
          />
        </div>
        <div className={styles.buttons}>
          <div>
            <h5>Суть вашего вопроса</h5>
            <div className={styles.category}>
              <Radio
                required
                title="Я хочу помочь"
                name="category"
                defaultValue="B"
                dark
              />
              <Radio
                required
                title="Помогите мне"
                name="category"
                defaultValue="C"
                dark
              />
              <Radio
                required
                title="сотрудничество"
                name="category"
                defaultValue="CE"
                dark
              />
              <Radio
                required
                title="другой вопрос"
                name="category"
                defaultValue="D"
                dark
              />
            </div>
          </div>
          <div>
            <h5>Предпочитаемая группа</h5>
            <div className={styles.group}>
              <Radio
                required
                title="Утренняя"
                name="group"
                defaultValue="morning"
                dark
              />
              <Radio
                required
                title="Дневная"
                name="group"
                defaultValue="day"
                dark
              />
              <Radio
                required
                title="Вечерняя"
                name="group"
                defaultValue="evening"
                dark
              />
            </div>
          </div>
        </div>
        <button className={styles.submit}>
          Записаться <LongArrow />
        </button>
      </form>
    </motion.section>
  );
};

export default FormSection;
