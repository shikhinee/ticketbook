import Head from "next/head";
import { useRef, Fragment } from "react";

import scrollTo from "@/utils/functions/scrollTo";

import DefaultLayout from "@/layouts/Default";

import ExampleLanding from "@/views/Root/ExampleLanding";
import ExampleTypography from "@/views/Root/ExampleTypography";
import ExampleTechnologies from "@/views/Root/ExampleTechnologies";

import styles from "./Root.module.scss";

const RootPage = (props) => {
  const ref = useRef(null);

  const handleClick = () => {
    // 2 times Navbar Height
    scrollTo(ref, 140);
  };

  return (
    <Fragment>
      <Head>
        {/* TITLE */}
        <title>ZTerra</title>
        <meta property="og:title" content="ZTerra" key="title" />
      </Head>

      <main className={styles.container}>
<div className={styles.nav}></div>
      </main>
    </Fragment>
  );
};

// LAYOUT DECLARATION
RootPage.Layout = DefaultLayout;

export default RootPage;
