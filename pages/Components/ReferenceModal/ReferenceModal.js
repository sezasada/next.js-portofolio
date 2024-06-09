import Modal from "react-modal";
import closeIcon from "../../../public/icons/close.webp";
import Image from "next/image";

const ReferenceModal = ({ expandedReference, closeModal, modalIsOpen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "40%",
      backgroundColor: "white",
    },
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
        overlayClassName="Overlay"
      >
        <>
          <button onClick={closeModal} className="button-wrapper">
            <Image src={closeIcon} alt="close" width={30} height={30} />
          </button>
          <div>
            <div>{expandedReference}</div>
          </div>
        </>
      </Modal>
    </div>
  );
};

export default ReferenceModal;
