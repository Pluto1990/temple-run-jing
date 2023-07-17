import React from 'react'
import Image from 'next/image'
import Arched from '@/assets/arched.svg'
import Button from '@/components/common/button'
import styles from './HomeGod.module.sass'

export default function HomeGod({
  text1 ,
  text2 ,
  pic1 ,
}) {
  // const temp = '../../' + pic + '.svg'
  return (
    <>
      <div className={`${styles.flex_col}`}>
        <div className={`${styles.container}`}>
          <Image
            src={`${pic1}`}
            // src="../../loveGod.svg"
            alt=""
            width="400"
            height="550"
            className={`${styles.img}`}
          ></Image>
          <Image src={Arched} alt="" width="430"></Image>
        </div>
        <div className={`${styles.title}`}>{text1}</div>
        <div className="mt20px">
          <Button text={text2} btnColor="green" />
        </div>
      </div>
    </>
  )
}
