import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy; 2023 Ken. All rights reserved.</div>
      <div className={styles.social}>
        <div className={styles.imgContainer}>
          <Image src={"/1.png"} fill={true} alt='img'/>
        </div>
        <div className={styles.imgContainer}>
          <Image src={"/2.png"} fill={true} alt='img'/>
        </div>
        <div className={styles.imgContainer}>
          <Image src={"/3.png"} fill={true} alt='img'/>
        </div>
        <div className={styles.imgContainer}>
          <Image src={"/4.png"} fill={true} alt='img'/>
        </div>
      </div>
    </div>
  )
}

export default Footer