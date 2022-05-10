//Next, React (core node_modules) imports must be placed here
import Image from "next/image";
//import STORE from '@/store'

import styles from "./Logo.module.scss";

const Logo = ({ size, ...props }) => {
  return (
    <div className={styles.container} style={{ fontSize: size }}>
      <Image src="/logo.svg" layout="fill" alt="logo"></Image>
    </div>
  );
};

export default Logo;
