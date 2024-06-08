import Head from "next/head";
import React, { useState, useRef, useEffect } from "react";
import Heading from "./Components/Heading/Heading";
import Projects from "./Components/Projects/Projects";
import SubHeading from "./Components/SubHeading/SubHeading";
import ReferencesCard from "./Components/References/ReferencesCard";
import rob from "../public/references/rob.webp";
import nic from "../public/references/nic.jpg";
import kyril from "../public/references/kyril.webp";
import josh from "../public/references/josh.jpg";
import { FormattedMessage } from "react-intl";

function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`px-10 md:px-20 lg:px-40 ${
          darkMode ? "bg-gray-900 dark:text-white" : "bg-D3D3D3"
        }`}
      >
        <Heading darkMode={darkMode} setDarkMode={setDarkMode} />
        <section className="py-10">
          <div className="referencesHeading text-3xl py-1 dark:text-white">
            <FormattedMessage id="References.title" />
          </div>
          <div className="references-container">
            <ReferencesCard
              name="Rob Rotarius"
              jobTitle="Head of Engineering"
              Experience="Software Development Manager at Amazon Web Services, Director of Enterprise Platform at LTK, Architect Engineer at Rakuten Advertising."
              image={{ src: rob, alt: "Rob" }}
            />
            <ReferencesCard
              name="Nic De Castro"
              jobTitle="Founder, CEO"
              Experience="Founder of LandTrust, VP of Strategic Partnerships at Strike Social, VP of Product and Strategy at Brite Content."
              image={{ src: nic, alt: "Rob" }}
            />
            <ReferencesCard
              name="Kyril Revels"
              jobTitle="Software Engineer"
              Experience="Principal Engineer at RMR Software Solutions, Manager of Software Engineers at Rakuten Advertising, Senior Software Engineer at DevelopDC."
              image={{ src: kyril, alt: "Kyril" }}
            />
            <ReferencesCard
              name="Josh Hinton"
              jobTitle="Software Engineer"
              Experience="Software Engineer at LandTrust, Co-Owner of Western Skies Landscaping LLC, Software Engineer at Prism Studios."
              image={{ src: josh, alt: "Josh" }}
            />
          </div>
          <SubHeading />
          <Projects darkMode={darkMode} />
        </section>
      </main>
    </div>
  );
}
export default Home;
