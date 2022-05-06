import Head from "next/head";
import React, { useEffect, useState } from "react";
import Clock from "react-live-clock";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
<script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8"></script>;
<link
  rel="stylesheet"
  href="https://s.pageclip.co/v1/pageclip.css"
  media="screen"
/>;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
  "@media (max-width: 768px)": {
    width: 400,
  },
  "@media (max-width: 500px)": {
    width: 260,
  },

  "@media (max-width: 320px)": {
    width: 200,
  },
};

export default function Home() {
  // useEffect(() => {

  // }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <a className="content__item">
            <button onClick={handleOpen} className="button button--narvi">
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
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <h2 style={{ marginBottom: "24px", marginTop: "0" }}>
                Send me an Email
              </h2>
              <form
                action="https://send.pageclip.co/SxVZDyaTbLzKRmsiCZb1GQlLBrEs4KAw"
                class="pageclip-form"
                method="post"
              >
                {/* <!-- Replace these inputs with your own. Make sure they have a "name" attribute! --> */}
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="Name"
                  required=""
                />
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Email"
                  required=""
                />
                <textarea placeholder="Some text..." name="message"></textarea>
                {/* <!-- This button will have a loading spinner. Keep the inner span for best results. --> */}
                <button
                  class="button button_cta pageclip-form__submit pageclip-form__submit--loading"
                  type="submit"
                >
                  <span>Submit</span>
                </button>
              </form>
            </Box>
          </Fade>
        </Modal>
      </main>
    </div>
  );
}
