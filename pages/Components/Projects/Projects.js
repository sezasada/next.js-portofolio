import Image from "next/image";
import Link from "next/link";
import EarningsData from "../../../public/EarningsData.png";
import farmworks from "../../../public/farmworks.png";
import cryptoExchange from "../../../public/crypto-exchange.png";
import MarketWatcher from "../../../public/MarketWatcher.png";
import { FormattedMessage } from "react-intl";

const Projects = (darkMode) => {
  return (
    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
      <div className="basis-1/3 flex-1 ">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            marginBottom: "10px",
          }}
          className="text-3xl py-1 dark:text-white"
        >
          <FormattedMessage id="Projects.marketWatcherTitle" />
        </div>
        <div style={{ overflow: "hidden", position: "relative" }}>
          <a
            href="https://marketwatcher.fly.dev/#/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={darkMode ? "dark-border" : "light-border"}>
              <Image
                className="marketwatcherimg"
                src={EarningsData}
                alt="Image of Market Watcher Application"
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.39) translateZ(0)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1) translateZ(0)";
                }}
              />
            </div>
          </a>
        </div>
        <div className="buttonContainer">
          <div
            className={
              darkMode ? "CodeContainer dark-mode" : "CodeContainer light-mode"
            }
            onClick={() =>
              window.open("https://marketwatcher.fly.dev/#/home", "_blank")
            }
          >
            <a
              href="https://marketwatcher.fly.dev/#/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Site</button>
            </a>
          </div>
          <div
            className={
              darkMode ? "CodeContainer dark-mode" : "CodeContainer light-mode"
            }
            onClick={() =>
              window.open("https://github.com/sezasada/Solo", "_blank")
            }
          >
            <a
              href="https://github.com/sezasada/Solo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Code</button>
            </a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p
            className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"
            style={{ textAlign: "left" }}
          >
            <FormattedMessage id="Projects.marketWatcherBio" />
          </p>
          <p style={{ textAlign: "left" }}>
            <a
              className="text-base text-teal-600 font-medium dark:text-teal-400"
              href="https://site.financialmodelingprep.com/developer/docs/#Earnings-Calendar"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}
            >
              <FormattedMessage id="Projects.marketWatcherFMP" />
            </a>
          </p>
          <p style={{ textAlign: "left" }}>
            <a
              className="text-base text-teal-600 font-medium dark:text-teal-400"
              href="https://stocknewsapi.com/examples"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}
            >
              <FormattedMessage id="Projects.marketWatcherSN" />
            </a>
          </p>
          <p style={{ textAlign: "left" }}>
            <a
              className="text-base text-teal-600 font-medium dark:text-teal-400"
              href="https://openai.com/blog/openai-api"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}
            >
              <FormattedMessage id="Projects.marketWatcherOAI" />
            </a>
          </p>
        </div>
      </div>
      <div className="basis-1/3 flex-1">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            marginBottom: "10px",
          }}
          className="text-3xl py-1 dark:text-white"
        >
          <FormattedMessage id="Projects.farmWorksTitle" />
        </div>
        <a
          href="https://farminthedell.fly.dev/#/main"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={darkMode ? "dark-border" : "light-border"}>
            <Image
              className="farmworksimg"
              src={farmworks}
              alt="image of farmworks application"
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.6)";
                e.target.style.transformOrigin = "top";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.transformOrigin = "center";
              }}
            />
          </div>
        </a>
        <div className="buttonContainer">
          <div
            className={
              darkMode ? "CodeContainer dark-mode" : "CodeContainer light-mode"
            }
            onClick={() =>
              window.open("https://farminthedell.fly.dev/#/main", "_blank")
            }
          >
            <a
              href="https://farminthedell.fly.dev/#/main"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Site</button>
            </a>
          </div>
          <div
            className={
              darkMode ? "CodeContainer dark-mode" : "CodeContainer light-mode"
            }
            onClick={() =>
              window.open("https://github.com/sezasada/task_portal", "_blank")
            }
          >
            <a
              href="https://github.com/sezasada/task_portal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Code</button>
            </a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p
            className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"
            style={{ textAlign: "left" }}
          >
            <FormattedMessage id="Projects.farmWorksBio" />
          </p>
          <Link href="/task_portal">
            <p style={{ textAlign: "left" }}>
              <a
                className="text-base text-teal-600 font-medium dark:text-teal-400"
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                <FormattedMessage id="Projects.appInfo" />
              </a>
            </p>
          </Link>
        </div>
      </div>
      <div className="basis-1/3 flex-1">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            marginBottom: "10px",
          }}
          className="text-3xl py-1 dark:text-white"
        >
          <FormattedMessage id="Projects.cryptoExchangeTitle" />
        </div>
        <div style={{ overflow: "hidden", position: "relative" }}>
          <a
            href="https://marketwatcher.fly.dev/#/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={darkMode ? "dark-border" : "light-border"}>
              <Image
                className="marketwatcherimg"
                src={cryptoExchange}
                alt="Image of Market Watcher Application"
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.39) translateZ(0)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1) translateZ(0)";
                }}
              />
            </div>
          </a>
        </div>

        <div className="buttonContainer">
          <div
            className={
              darkMode ? "CodeContainer dark-mode" : "CodeContainer light-mode"
            }
            onClick={() =>
              window.open("https://farminthedell.fly.dev/#/main", "_blank")
            }
          >
            <a
              href="https://farminthedell.fly.dev/#/main"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Site</button>
            </a>
          </div>
          <div
            className={
              darkMode ? "CodeContainer dark-mode" : "CodeContainer light-mode"
            }
            onClick={() =>
              window.open("https://github.com/sezasada/task_portal", "_blank")
            }
          >
            <a
              href="https://github.com/sezasada/task_portal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Code</button>
            </a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p
            className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"
            style={{ textAlign: "left" }}
          >
            <FormattedMessage id="Projects.cryptoExchangeBio" />
          </p>
          <Link href="/task_portal">
            <p style={{ textAlign: "left" }}>
              <a
                className="text-base text-teal-600 font-medium dark:text-teal-400"
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                <FormattedMessage id="Projects.appInfo" />
              </a>
            </p>
          </Link>
        </div>
      </div>
      <div className="basis-1/3 flex-1">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            marginBottom: "10px",
          }}
          className="text-3xl py-1 dark:text-white"
        ></div>
        <p
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            position: "relative",
            zIndex: 1,
          }}
          src={MarketWatcher}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.4)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
          }}
        />
      </div>
    </div>
  );
};

export default Projects;
