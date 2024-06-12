import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal";
import EarningsData from "../../../public/EarningsData.png";
import farmworks from "../../../public/farmworks.png";
import cryptoExchange from "../../../public/crypto-exchange.png";
import MarketWatcher from "../../../public/MarketWatcher.png";
import ReactPlayer from "react-player";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { FormattedMessage } from "react-intl";
import closeIcon from "../../../public/icons/close.webp";

import React, { useState } from "react";

const Projects = (darkMode) => {
  const [showVideo, setShowVideo] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const toggleTooltip = () => {
    // Toggle visibility state
    setTooltipVisible(!tooltipVisible);
    // Force update tooltip visibility
    ReactTooltip.rebuild();
  };
  const openModal = () => {
    setIsOpen(true);
    setShowVideo(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setShowVideo(false);
  };

  const videoUrl = "/videos/marketWatchervideo.mp4";
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "70%",
      backgroundColor: "white",
    },
  };
  return (
    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
        overlayClassName="Overlay"
      >
        <button onClick={closeModal} className="button-wrapper">
          <Image src={closeIcon} alt="close" width={40} height={40} />
        </button>
        {showVideo && (
          <ReactPlayer
            url={videoUrl}
            playing={showVideo}
            controls
            width="100%"
            height="100%"
          />
        )}
      </Modal>
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
          <div
            onClick={openModal}
            style={{ cursor: "pointer" }}
            className={darkMode ? "dark-border" : "light-border"}
          >
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
        </div>
        <div className="buttonContainer">
          <div
            className={
              darkMode ? "CodeContainer dark-mode" : "CodeContainer light-mode"
            }
            onClick={openModal}
          >
            <button>Site</button>
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
        <div className="buttonContainer">
          <Tippy
            content="This application is no longer supported, sorry!"
            trigger="click"
          >
            <div
              className={
                darkMode
                  ? "CodeContainer dark-mode"
                  : "CodeContainer light-mode"
              }
            >
              <button>Site</button>
            </div>
          </Tippy>
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
        </div>

        <div className="buttonContainer">
          <Tippy
            content="This application is no longer supported, sorry!"
            trigger="click"
          >
            <div
              className={
                darkMode
                  ? "CodeContainer dark-mode"
                  : "CodeContainer light-mode"
              }
            >
              <button>Site</button>
            </div>
          </Tippy>
          <div
            className={
              darkMode ? "CodeContainer dark-mode" : "CodeContainer light-mode"
            }
            onClick={() =>
              window.open("https://github.com/sezasada/cryptoexchange", "_blank")
            }
          >
            <a
              href="https://github.com/sezasada/cryptoexchange"
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
