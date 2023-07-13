import React from "react";

const SuccessModal = ({ onClose, content }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Success!</h2>
        <p>Your form has been submitted successfully.</p>

        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
