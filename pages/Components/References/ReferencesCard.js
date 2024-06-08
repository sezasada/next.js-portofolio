import { shape, string } from "prop-types";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

const ReferencesCard = ({ name, jobTitle, Experience, image }) => {
  return (
    <div className="card-container border-2 dark:border-teal-400 border-teal-600">
      <div className="card-header">
        <div className="card-image">
          <Image src={image.src} alt={image.alt} objectFit="cover" />
        </div>
        <div className="card-bio">
          <div className="card-text">
            <div>{name}</div>
          </div>
          <div className="card-subtext">
            <div>{jobTitle}</div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div>
          <div className="card-text">Experience</div>
        </div>
        <div className="card-subtext">
          <div>{Experience}</div>
        </div>
        <button className="buttonStyles">
          <FormattedMessage id="References.button" />
        </button>
      </div>
    </div>
  );
};

ReferencesCard.propTypes = {
  name: string.isRequired,
  jobTitle: string.isRequired,
  Experience: string.isRequired,
  image: shape({
    src: string.isRequired,
    alt: string.isRequired,
  }).isRequired,
};

export default ReferencesCard;
