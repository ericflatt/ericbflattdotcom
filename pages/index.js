import Head from "next/head";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Eric Flatt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto mt-16 max-w-container-small md:max-w-container-large md:mt-32">
        
        <div class="tooltip">
        <h1 className="bread">🍞</h1>
          <span class="tooltiptext">Why the bread? Because I'm allergic</span>
        </div>
        <h1 className="text-base">Eric Flatt</h1>
        <h2 className="text-secondary">Product Designer based in Seattle</h2>
        <div>
          <p className="bio">
            I'm currently a UI/UX Designer on the digital experience team at{" "}
            <a className="text-link" href="https://funko.com" target="blank">
              Funko
            </a>
            . Previous experience includes design & front-end developmennt at
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
            href="https://instagram.com/eric_flatt"
          >
            Instagram
          </a>
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
            href="https://linkedin.com/in/ericbflatt"
          >
            LinkedIn
          </a>
          <a className="text-link" href="mailto:eflatt18@gmail.com">
            Email
          </a>
        </div>
      </main>
    </div>
  );
}
