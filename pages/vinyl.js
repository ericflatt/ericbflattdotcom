import Head from "next/head";
import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Script from "next/script";
// import Clock from "react-live-clock";
import SideNav from "./nav";


export default function Vinyl() {
  // useEffect(() => {
  // }, []);

  return (
    <div className="container">
      <Head>
        <title>Eric Flatt</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Eric Flatt is a UX Designer currently working at Funko"
        />
      </Head>
      <SideNav />
    </div>
  );
}
