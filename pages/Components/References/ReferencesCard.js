import { shape, string, node } from "prop-types";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import React, { useState } from "react";
import ReferenceModal from "../ReferenceModal/ReferenceModal";

const ReferencesCard = ({
  name,
  firstName,
  jobTitle,
  reference,
  expandedReference,
  image,
  linkedIn,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
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
          <div className="card-subtext">
            <div>{reference}</div>
          </div>
          <div>
            <div className="button-container">
              <button className="buttonStyles" onClick={openModal}>
                <FormattedMessage id="References.button" />
              </button>
              <button
                className="buttonStyles"
                onClick={() => window.open(linkedIn, "_blank")}
              >
                <FormattedMessage
                  id="References.contactReference"
                  values={{ name: firstName }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ReferenceModal
          expandedReference={expandedReference}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      </div>
    </div>
  );
};

ReferencesCard.propTypes = {
  name: string.isRequired,
  jobTitle: string.isRequired,
  reference: string.isRequired,
  expandedReference: node.isRequired,
  image: shape({
    src: string.isRequired,
    alt: string.isRequired,
  }).isRequired,
};

export default ReferencesCard;
