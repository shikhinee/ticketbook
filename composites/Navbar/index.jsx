//Next, React (core node_modules) imports must be placed here
import { useEffect, useRef } from "react";
import Image from "next/image";
//import STORE from '@/store'

//import COMPONENT from '@/components'
import Link from "@/components/Link";
import Logo from "@/components/Logo";

import styles from "./Navbar.module.scss";

const Navbar = (props) => {
  const ref = useRef(null);


  return (
    <header ref={ref} className={styles.container}>
      <div className={styles.coverImg}>

      </div>
      <nav className={styles.innerContainer}>
        <Link className={styles.logoContainer} href="/">
          <Logo size={10} />
        </Link>
      </nav>
      {/* <div className={styles.frame}>
        <div className={styles.frameContainer}>
          <Image layout="responsive" width={1920} height={200} src="/frame.svg" />
        </div>
      </div> */}
    </header>
  );
};

export default Navbar;
