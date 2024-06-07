import { FormattedMessage } from "react-intl";

const SubHeading = () => {
  return (
    <div className="divs-div">
      <div
        className="text-center mt-4"
        style={{ maxWidth: "1000px", margin: "0 auto" }}
      >
        <div className="center-title">
          <div className="text-3xl py-1 dark:text-white">
            <FormattedMessage id="SubHeading.title" />
          </div>
        </div>

        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          <FormattedMessage id="SubHeading.bio" />
        </p>
      </div>
    </div>
  );
};

export default SubHeading;
