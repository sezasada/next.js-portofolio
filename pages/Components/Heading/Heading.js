import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import mypicture from "../../../public/mypicture.png";
import { FormattedMessage } from "react-intl";

const Heading = ({ darkMode, setDarkMode }) => {
  return (
    <section className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-between dark:text-white">
        <div className="font-burtons text-xl">Portfolio</div>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className=" cursor-pointer text-2xl"
            />
          </li>
          <li>
            <Link href="/resume">
              <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">
                <FormattedMessage id="Heading.resume" />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="text-center p-10 py-10">
        <div className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          <FormattedMessage id="Heading.name" />
        </div>
        <div className="text-2xl py-2 dark:text-white md:text-3xl">
          <FormattedMessage id="Heading.jobTitle" />
        </div>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          <FormattedMessage
            id="Heading.userBio"
            values={{
              a: (chunks) => (
                <Link href="https://www.landtrust.com">
                  <a className="text-teal-500 hover:underline" target="_blank">
                    {chunks}
                  </a>
                </Link>
              ),
            }}
          />
        </p>
        <div className="text-5xl flex justify-center gap-7 py-3 text-gray-600 dark:text-gray-400">
          <Link href="https://www.linkedin.com/in/sebastien-zasada">
            <a target="_blank">
              <AiFillLinkedin className="icon-grow" />
            </a>
          </Link>
          <Link href="https://github.com/sezasada">
            <a target="_blank">
              <FaGithub className="icon-grow" />
            </a>
          </Link>
        </div>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-10 md:h-96 md:w-96 border-4 border-teal-600 dark:border-teal-400">
          <Image src={mypicture} alt="Picture of Sebastien" />
        </div>
      </div>
    </section>
  );
};

export default Heading;
