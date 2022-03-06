import Head from "next/head";
import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Script from "next/script";
import Clock from "react-live-clock";

export default function Home() {
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
      {/* main section */}
      <main className="mx-auto mt-16 max-w-container-small md:max-w-container-large md:mt-32">
        {/* <div className="tooltip">
          <button className="bread">🍞</button>
          <span className="tooltiptext">
            Why the bread? Because I'm allergic
          </span>
        </div> */}
        <h1 className="text-base">Hello, my name is Eric.</h1>
        {/* <h2 className="text-secondary">Product Designer based in Seattle</h2> */}
        <div>
          <p className="bio">
            I'm a product designer based in Seattle. Right now I am working on
            the digital experience team at {" "}
            <a
              target="blank"
              href="https://funko.com"
              className="content__item"
            >
              <button className="button button--narvi">
                <span>
                  <span style={{ fontWeight: "700" }}> Funko</span>
                </span>
              </button>
            </a>.
            {/* I'm currently a UI/UX Designer on the digital experience team at{" "}
            <a className="text-link" href="https://funko.com" target="blank">
              Funko
            </a>
            . Previous experience includes design & front-end development at
            Black Math, design & shopify development at Bobblehaus, and ux
            design intern at iCIMS. Want to talk,{" "}
            <a href="mailto:eflatt18@gmail.com" className="text-link">
              get in touch
            </a>
            .{" "} */}
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
      {/* me as funko if wanted */}
      {/* <div className="funko-me">
        <Image className="funko-size" src={funko} alt="funko" />
      </div> */}
    </div>
  );
}
