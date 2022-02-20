import Head from "next/head";
import React, { useEffect } from "react";
import Image from "next/image";
import funko from "../pages/images/funko-me.png";
import Script from "next/script";
import Clock from "react-live-clock";
// https://assets2.lottiefiles.com/packages/lf20_u4yrau.json

export default function Home() {
  useEffect(() => {
    if (document) {
      
     
    }
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Eric Flatt</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Eric Flatt is a UX Designer currently working at Funko"
        />
         <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=[UA-107339411-2]"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '[UA-107339411-2]', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>

      <main className="mx-auto mt-16 max-w-container-small md:max-w-container-large md:mt-32">
      <div class="container">
        <div class="svg hide" id="svg"></div>
        </div>
        <div className="tooltip">
          <button className="bread">🍞</button>
          
          <span className="tooltiptext">
            Why the bread? Because I'm allergic
          </span>
        </div>
        <h1 className="text-base">Eric Flatt</h1>
        <h2 className="text-secondary">Product Designer based in Seattle</h2>
        <div>
          <p className="bio">
            I'm currently a UI/UX Designer on the digital experience team at{" "}
            <a className="text-link" href="https://funko.com" target="blank">
              Funko
            </a>
            . Previous experience includes design & front-end development at
            Black Math, design & shopify development at Bobblehaus, and ux
            design intern at iCIMS. Want to talk,{" "}
            <a href="mailto:eflatt18@gmail.com" className="text-link">
              get in touch
            </a>
            .{" "}
          </p>
        </div>

        <div className="social-links">
          <h1 className="text-base social-title">Find me on the internet</h1>
          <a
            className="text-link"
            target="blank"
            href="https://twitter.com/__flatt"
          >
            Twitter
          </a>
          <a
            className="text-link"
            target="blank"
            href="https://instagram.com/eric_flatt"
          >
            Instagram
          </a>
          <a
            className="text-link"
            target="blank"
            href="https://linkedin.com/in/ericbflatt"
          >
            LinkedIn
          </a>
          <a className="text-link" href="mailto:eflatt18@gmail.com">
            Email
          </a>
        </div>
        <Clock
          className="clock"
          format={"h:mm:ss A z"}
          style={{ fontSize: "1rem" }}
          ticking={true}
          timezone={"US/Pacific"}
        />
      </main>
      <div className="funko-me">
        <Image className="funko-size" src={funko} alt="funko" />
      </div>
    </div>
  );
}
