import React from "react";

const Modal = ({ onClose, content }) => {
  return (
    <div className="w-full md:w-1/2 mx-auto fixed inset-0 flex items-center justify-center z-50">
      <div class="p-5 rounded-lg shadow bg-white">
        <div>
          <svg
            className="w-6 h-6 fill-current text-cyan-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />
          </svg>
        </div>
        <div className="ml-3">
          <h2 className="font-semibold text-gray-800">Form submission details</h2>
          {content}
          {/* <p class="modal-content"></p> */}
          <button
            className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={onClose}
          >

            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
