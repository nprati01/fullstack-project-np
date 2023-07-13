import React from "react";

const Modal = ({ onClose, content }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
