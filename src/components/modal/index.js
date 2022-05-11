import React from "react";
import { IoCloseSharp } from "react-icons/io5";
const Modal = ({ isOpen, toggle, children }) => {
  return (
    isOpen && (
      <div
        className="fixed inset-0 h-full w-full overflow-y-auto bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
        onClick={() => {
          toggle();
        }}
      >
        <div
          className="w-1/2 mx-auto bg-white py-5 border shadow-lg rounded-md"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    )
  );
};

const ModalHeader = ({ children, toggle }) => {
  return (
    <div>
      <div className="flex justify-between px-5 pb-5">
        <h1 className="font-medium">{children}</h1>
        <button onClick={toggle}>
          <IoCloseSharp size={20} />
        </button>
      </div>
      <hr />
    </div>
  );
};

const ModalBody = ({ children }) => {
  return (
    <div>
      <div className="px-4">{children}</div>
    </div>
  );
};

const ModalFooter = ({ children }) => {
  return (
    <div>
      <hr />
      <div className="pt-5 px-5 flex justify-end space-x-2">{children}</div>
    </div>
  );
};

export { Modal, ModalHeader, ModalBody, ModalFooter };