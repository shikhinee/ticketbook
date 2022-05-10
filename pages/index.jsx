import Head from "next/head";
import { useEffect, useState, useRef, Fragment } from "react";
import { useRouter } from "next/router";
import Notification from "@/components/Notification";
import scrollTo from "@/utils/functions/scrollTo";

import DefaultLayout from "@/layouts/Default";

import ProductReq from '@/components/ProductReq';
import ConcertCard from '@/components/ConcertCard';
import ConcertInfo from '@/components/ConcertInfo';
import styles from "./Root.module.scss";

const RootPage = ({firstName, lastName, email, phoneNumber, location, ...props}) => {
  return (
    <Fragment>
      <Head>
        {/* TITLE */}
        <title>ZTerra</title>
        <meta property="og:title" content="ZTerra" key="title" />
      </Head>

      <main className={styles.container}>
      <ConcertCard />
			 <ConcertInfo />
			<ProductReq/>
      </main>
    </Fragment>
  );
};

// LAYOUT DECLARATION
RootPage.Layout = DefaultLayout;

export default RootPage;
