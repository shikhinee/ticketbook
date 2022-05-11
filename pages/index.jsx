import Head from "next/head";
import { useEffect, useState, useRef, Fragment } from "react";
import { motion } from "framer-motion";

import DefaultLayout from "@/layouts/Default";

import ProductReq from "@/components/ProductReq";
import ConcertCard from "@/components/ConcertCard";
import ConcertInfo from "@/components/ConcertInfo";
import styles from "./Root.module.scss";

const RootPage = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  location,
  ...props
}) => {
  return (
    <Fragment>
      <Head>
        {/* TITLE */}
        <title>ZTerra</title>
        <meta property="og:title" content="ZTerra" key="title" />
      </Head>

      <motion.main
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.container}
      >
        <ConcertCard />
        <ConcertInfo />
        <ProductReq />
      </motion.main>
    </Fragment>
  );
};

// LAYOUT DECLARATION
RootPage.Layout = DefaultLayout;

export default RootPage;
