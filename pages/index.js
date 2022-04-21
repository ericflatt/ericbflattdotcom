import Head from "next/head";
import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Script from "next/script";
import Clock from "react-live-clock";
import SideNav from "./nav";

export default function Home() {
  // useEffect(() => {
  // }, []);

  return (
    <div className="container">
      <Head>
        <title>Eric Flatt</title>
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Eric Flatt is a UX Designer currently working on the digital experience team at Funko."
        />
      </Head>
      <main className="mx-auto mt-16 max-w-container-small md:max-w-container-large md:mt-32">
        <h1 className="text-base">Hello, my name is Eric.</h1>
        {/* <h2 className="text-secondary">Product Designer based in Seattle</h2> */}
        <div>
          <p className="bio">
            I'm a product designer based in Seattle. Right now I am working on
            the digital experience team at{" "}
            <a
              target="blank"
              href="https://funko.com"
              className="content__item"
            >
              Funko
              {/* <button className="button button--narvi">
                <span>
                  <span style={{ fontWeight: "700" }}> Funko</span>
                </span>
              </button> */}
            </a>
            .
          </p>
        </div>
        {/* social links */}
        <div className="social-links">
          <h1 className="text-base social-title">Find me on the internet</h1>
          <a
            target="blank"
            href="https://twitter.com/__flatt"
            className="content__item"
          >
            <button className="button button--narvi">
              <span>
                <span>Twitter</span>
              </span>
            </button>
          </a>
          <a
            target="blank"
            href="https://instagram.com/eric_flatt"
            className="content__item"
          >
            <button className="button button--narvi">
              <span>
                <span>Instagram</span>
              </span>
            </button>
          </a>
          <a
            href="https://linkedin.com/in/ericbflatt"
            target="blank"
            className="content__item"
          >
            <button className="button button--narvi">
              <span>
                <span>LinkedIn</span>
              </span>
            </button>
          </a>
          <a href="mailto:eflatt18@gmail.com" className="content__item">
            <button className="button button--narvi">
              <span>
                <span>Email</span>
              </span>
            </button>
          </a>
        </div>
        {/* clock feature */}
        <Clock
          className="clock"
          format={"h:mm:ss A z"}
          style={{ fontSize: "1rem" }}
          ticking={true}
          timezone={"US/Pacific"}
        />
      </main>
    </div>
  );
}
