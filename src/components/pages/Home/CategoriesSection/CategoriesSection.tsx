import React, { FC } from "react";

import styles from "./CategoriesSection.module.scss";
import Image from "next/image";
import Button from "../../../UI/Button/Button";
import Arrow from "../../../other/Icons/Arrow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { motion } from "framer-motion";
import Heading from "../../../UI/Heading/Heading";

import categoryCarB from "/src/images/oversize/category_car_b.jpg";
import categoryCarC from "/src/images/oversize/category_car_c.jpg";
import categoryCarCE from "/src/images/oversize/category_car_ce.jpg";
import categoryCarD from "/src/images/oversize/category_car_d.jpg";

import price from "/src/images/icons/price.png";
import theory from "/src/images/icons/theory.png";
import practice from "/src/images/icons/practice.png";
import Link from "next/link";

const CategoriesSection: FC = () => {
  return (
    <motion.section
      initial={{ translateX: "200px", opacity: 0 }}
      whileInView={{ translateX: "0px", opacity: 1 }}
      viewport={{ once: true }}
      className={styles.section}
      id="categories"
    >
      <Heading>Тут заголовок</Heading>
      <div className={styles.categories}>
        <article>
          <h3>
            Подзаголовок <span>1</span>
          </h3>
          <div className={styles.img}>
            <Image src={categoryCarB} alt="Картинка 1" />
          </div>
          <ul>
            <li>
              <Image src={price} alt="Иконка цены" />
              <span className={styles.heading}>$23 400</span>
              <span>дополнительный текст</span>
            </li>
            <li>
              <Image src={theory} alt="Иконка теории" />
              <span className={styles.heading}>Теория</span>
              <span>- 2 месяца</span>
            </li>
            <li>
              <Image src={practice} alt="Иконка практики" />
              <span className={styles.heading}>Практика</span>
              <span>- 1.5 месяца</span>
            </li>
          </ul>
          <Link href="/#form" scroll={false}>
            <Button primary>
              Пожертвовать <Arrow />
            </Button>
          </Link>
        </article>
        <article>
          <h3>
            Подзаголовок <span>2</span>
          </h3>
          <div className={styles.img}>
            <Image src={categoryCarC} alt="Картинка 2" />
          </div>
          <ul>
            <li>
              <Image src={price} alt="Иконка цены" />
              <span className={styles.heading}>$33 500</span>
              <span>дополнительный текст</span>
            </li>
            <li>
              <Image src={theory} alt="Иконка теории" />
              <span className={styles.heading}>Теория</span>
              <span>- 3 месяца</span>
            </li>
            <li>
              <Image src={practice} alt="Иконка практики" />
              <span className={styles.heading}>Практика</span>
              <span>- 2 месяца</span>
            </li>
          </ul>
          <Link href="/#form" scroll={false}>
            <Button primary>
              Пожертвовать <Arrow />
            </Button>
          </Link>
        </article>
        <article>
          <h3>
            Подзаголовок <span>3</span>
          </h3>
          <div className={styles.img}>
            <Image src={categoryCarCE} alt="Картинка 3" />
          </div>
          <ul>
            <li>
              <Image src={price} alt="Иконка цены" />
              <span className={styles.heading}>$45 000</span>
              <span>дополнительный текст</span>
            </li>
            <li>
              <Image src={theory} alt="Иконка теории" />
              <span className={styles.heading}>Теория</span>
              <span>- 3 месяца</span>
            </li>
            <li>
              <Image src={practice} alt="Иконка практики" />
              <span className={styles.heading}>Практика</span>
              <span>- 2.5 месяца</span>
            </li>
          </ul>
          <Link href="/#form" scroll={false}>
            <Button primary>
              Пожертвовать <Arrow />
            </Button>
          </Link>
        </article>
        <article>
          <h3>
            Подзаголовок <span>4</span>
          </h3>
          <div className={styles.img}>
            <Image src={categoryCarD} alt="Картинка 4" />
          </div>
          <ul>
            <li>
              <Image src={price} alt="Иконка цены" />
              <span className={styles.heading}>$26 000</span>
              <span>дополнительный текст</span>
            </li>
            <li>
              <Image src={theory} alt="Иконка теории" />
              <span className={styles.heading}>Теория</span>
              <span>- 3 месяца</span>
            </li>
            <li>
              <Image src={practice} alt="Иконка практики" />
              <span className={styles.heading}>Практика</span>
              <span>- 2.5 месяца</span>
            </li>
          </ul>
          <Link href="/#form" scroll={false}>
            <Button primary>
              Пожертвовать <Arrow />
            </Button>
          </Link>
        </article>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>
          <article>
            <h3>
              Подзаголовок <span>1</span>
            </h3>
            <div className={styles.img}>
              <Image src={categoryCarB} alt="Картинка 1" />
            </div>
            <ul>
              <li>
                <Image src={price} alt="Иконка цены" />
                <span className={styles.heading}>$23 400</span>
                <span>дополнительный текст</span>
              </li>
              <li>
                <Image src={theory} alt="Иконка теории" />
                <span className={styles.heading}>Теория</span>
                <span>- 2 месяца</span>
              </li>
              <li>
                <Image src={practice} alt="Иконка практики" />
                <span className={styles.heading}>Практика</span>
                <span>- 1.5 месяца</span>
              </li>
            </ul>
            <Button primary>
              Пожертвовать <Arrow />
            </Button>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <h3>
              Подзаголовок <span>2</span>
            </h3>
            <div className={styles.img}>
              <Image src={categoryCarC} alt="Картинка 2" />
            </div>
            <ul>
              <li>
                <Image src={price} alt="Иконка цены" />
                <span className={styles.heading}>$33 500</span>
                <span>дополнительный текст</span>
              </li>
              <li>
                <Image src={theory} alt="Иконка теории" />
                <span className={styles.heading}>Теория</span>
                <span>- 3 месяца</span>
              </li>
              <li>
                <Image src={practice} alt="Иконка практики" />
                <span className={styles.heading}>Практика</span>
                <span>- 2 месяца</span>
              </li>
            </ul>
            <Button primary>
              Пожертвовать <Arrow />
            </Button>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <h3>
              Подзаголовок <span>3</span>
            </h3>
            <div className={styles.img}>
              <Image src={categoryCarCE} alt="Картинка 3" />
            </div>
            <ul>
              <li>
                <Image src={price} alt="Иконка цены" />
                <span className={styles.heading}>$45 000</span>
                <span>дополнительный текст</span>
              </li>
              <li>
                <Image src={theory} alt="Иконка теории" />
                <span className={styles.heading}>Теория</span>
                <span>- 3 месяца</span>
              </li>
              <li>
                <Image src={practice} alt="Иконка практики" />
                <span className={styles.heading}>Практика</span>
                <span>- 2.5 месяца</span>
              </li>
            </ul>
            <Button primary>
              Пожертвовать <Arrow />
            </Button>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <h3>
              Подзаголовок <span>4</span>
            </h3>
            <div className={styles.img}>
              <Image src={categoryCarD} alt="Картинка 4" />
            </div>
            <ul>
              <li>
                <Image src={price} alt="Иконка цены" />
                <span className={styles.heading}>$26 000</span>
                <span>дополнительный текст</span>
              </li>
              <li>
                <Image src={theory} alt="Иконка теории" />
                <span className={styles.heading}>Теория</span>
                <span>- 3 месяца</span>
              </li>
              <li>
                <Image src={practice} alt="Иконка практики" />
                <span className={styles.heading}>Практика</span>
                <span>- 2.5 месяца</span>
              </li>
            </ul>
            <Button primary>
              Пожертвовать <Arrow />
            </Button>
          </article>
        </SwiperSlide>
      </Swiper>
    </motion.section>
  );
};

export default CategoriesSection;
