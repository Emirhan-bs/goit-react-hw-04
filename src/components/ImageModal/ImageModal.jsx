import React from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

function ImageModal({ data, onClose }) {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img
        src={data.urls.regular}
        alt={data.alt_description || "Photo"}
        className={styles.image}
      />
    </Modal>
  );
}

export default ImageModal;
