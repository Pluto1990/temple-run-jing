import React from "react";
import Image from "next/image";
import cloud from "@/assets/cloud.svg";
import temple from "@/assets/temple.svg";
import styles from "./temple.module.scss";
import dog from "@/assets/dog_in.gif";
import lighting from "@/assets/green_lighting.svg";
import pink_star from "@/assets/Pink_Star.svg";
import signIn from "@/assets/sing_in.svg";
import C1 from "@/assets/littleC1.svg";
import C2 from "@/assets/littleC2.svg";

// 首頁的廟
export default function Temple() {
  return (
    <>
      <div className={`${styles.flex}`}>
        <div className={`${styles.temple}`}>
          <Image src={temple} alt="temple"></Image>
          {/* dog */}
          <div className={`${styles.dog}`}>
            <Image src={dog} alt="dog" unoptimized={true} />
            {/* lighting */}
            <div className={`${styles.lighting}`}>
              <Image src={lighting} width={25} alt="lighting" />
            </div>
            {/* lighting */}
            <div className={`${styles.light_div}`}>
              <div className={`${styles.lighting2}`}>
                <Image src={lighting} width={25} alt="lighting" />
              </div>
            </div>
          </div>
          <div id="change" className={`${styles.signInBlock}`}>
            {/* signin star */}
            <div className={`${styles.pinkStar}`}>
              <Image src={pink_star} width={40} alt="star" />
            </div>
            {/* sign in word */}
            <div className={`${styles.signIn}`}>
              <Image src={signIn} width={30} alt="signIn" />
            </div>
          </div>
        </div>
        <div className={`${styles.cloud}`}>
          <Image src={cloud} alt="cloud"></Image>
        </div>
        <div className={`${styles.C1}`}>
          <Image src={C1} alt="cloud"></Image>
        </div>
        <div className={`${styles.C2}`}>
          <Image src={C2} alt="cloud"></Image>
        </div>
      </div>
    </>
  );
}
