import React, { FC } from "react";

import styles from "./PrimarySection.module.scss";
import Button from "../../../UI/Button/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

import Arrow from "../../../other/Icons/Arrow";

import Image from "next/image";
import { Autoplay } from "swiper";
import Link from "next/link";

import car from "/src/images/oversize/car.png";
import chart from "/src/images/icons/chart.png";
import fleet from "/src/images/icons/fleet.png";
import instructor from "/src/images/icons/instructor.png";
import discount from "/src/images/icons/discount.png";

const PrimarySection: FC = () => {
  return (
    <motion.section
      initial={{ translateY: "200px", opacity: 0 }}
      whileInView={{ translateY: "0px", opacity: 1 }}
      viewport={{ once: true }}
      className={styles.section}
    >
      <article className={styles.majorArticle}>
        <h1>Здесь самый первый заголовок страницы</h1>
        <p>
          Здесь нужен не менее значимый по содержанию текст,
          который был бы способный побудить пользователя к действиям.
        </p>
        <Link href="/#form" scroll={false}>
          <Button primary>
            Записаться <Arrow />
          </Button>
        </Link>
        <Image src={car} alt="Картинка машины" />
      </article>
      <div className={styles.items}>
        <article>
          <Image src={chart} alt="График" />
          <h4>Преимущество #1</h4>
          <p>Описание преимущества #1</p>
        </article>
        <article>
          <Image src={fleet} alt="Автопарк" />
          <h4>Преимущество #2</h4>
          <p>Описание преимущества #2</p>
        </article>
        <article>
          <Image src={instructor} alt="Инструктора" />
          <h4>Преимущество #3</h4>
          <p>Описание преимущества #3</p>
        </article>
        <article>
          <Image src={discount} alt="Рассрочка и скидки" />
          <h4>Преимущество #4</h4>
          <p>Описание преимущества #4</p>
        </article>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={chart} alt="График" />
            <h4>Преимущество #1</h4>
            <p>Описание преимущества #1</p>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={fleet} alt="Автопарк" />
            <h4>Преимущество #2</h4>
            <p>Описание преимущества #2</p>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={instructor} alt="Инструктора" />
            <h4>Преимущество #3</h4>
            <p>Описание преимущества #3</p>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={discount} alt="Рассрочка и скидки" />
            <h4>Преимущество #4</h4>
            <p>Описание преимущества #4</p>
          </article>
        </SwiperSlide>
      </Swiper>
    </motion.section>
  );
};

export default PrimarySection;
