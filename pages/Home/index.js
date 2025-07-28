import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import styles from "@/styles/index.module.scss";
import Image from "next/image";
import Temple from "@/components/common/temple";
import Logo from "@/assets/logo.svg";
import Title from "@/components/common/title";
import foo_dog_left from "@/assets/foo_dog_left.svg";
import foo_dog_right from "@/assets/foo_dog_right.svg";
import bottom_nav from "@/assets/nav.svg";
import HomeSet from "@/components/common/cards/HomeSet";
import mazu from "@/assets/mazuSet.svg";
import study from "@/assets/studySet.svg";
import love from "@/assets/loveSet.svg";
import God from "@/components/common/cards/HomeGod";
import mazuGod from "@/assets/mazuGod.svg";
import studyGod from "@/assets/studyGod.svg";
import loveGod from "@/assets/loveGod.svg";
import Online from '@/components/common/cards/HomeOnline'
import Pocket from '@/components/common/cards/HomePocket'
import Job from '@/components/common/cards/HomeJob'
export default function Home() {
  return (
    <>
      <main>
        <section className={`${styles.section_1}`}>
          <Image className={styles.logo2} src={Logo} alt="logo" />
          <Image
            src={foo_dog_left}
            alt="foo_dog_left"
            className={`${styles.right}`}
          />
          <Temple />
          <Image
            src={foo_dog_right}
            alt="foo_dog_right"
            className={`${styles.left}`}
          />
          <Image
            src={bottom_nav}
            alt="bottom_nav"
            className={`${styles.bottom}`}
          />
        </section>
        <section className={`${styles.section_2}`}>
          <Title
            text="供品套組精選"
            text2="OFFERING SELECTION SET"
            lineColor="hot_pink"
          />
          <Swiper
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <HomeSet text1="吉祥如意" text2="媽祖基本款" pic={mazu} />
            </SwiperSlide>
            <SwiperSlide>
              <HomeSet text1="花好月圓" text2="月老基本款" pic={love} />
            </SwiperSlide>
            <SwiperSlide>
              <HomeSet text1="金榜題名" text2="文昌基本款" pic={study} />
            </SwiperSlide>
          </Swiper>
        </section>
        <section className={`${styles.section_3}`}>
          <Title
            text="求神問卜"
            text2="INQUIRING OF THE DIVINE"
            lineColor="green"
          />
          <div className={styles.flex_row2}>
            <God text1="媽祖" text2="求籤" pic={mazuGod} />
            <God text1="月老" text2="求紅線" pic={loveGod} />
            <God text1="文昌" text2="點學業燈" pic={studyGod} />
          </div>
        </section>
        {/* section4 */}
        <Title text="遶境online" text2="PILGRIMAGE ONLINE" lineColor="green" />
        <div>
          <Online />
        </div>
        {/* section5 */}
        <Title text="錦囊小知識" text2="POCKET TRIVIA" lineColor="hot_pink" />
        <div>
          <Pocket />
        </div>
        <div className="mt60px">
          <Title
            text="加入我們"
            text2="JOB ADVERTISEMENT"
            lineColor="hot_pink"
          />
        </div>
        <Job />
      </main>
    </>
  );
}
