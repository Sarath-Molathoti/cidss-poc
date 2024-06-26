"use client";
import React, { useState, useEffect } from "react";
import Modal from "../../../components/Modal.jsx";
import useModalStore from "../../../stores/ModalStore.jsx";
const WpmMgt = () => {
  const incrementZIndex = useModalStore((state) => state.incrementZIndex);

  useEffect(() => {
    incrementZIndex();
  }, []);

  const zIndex = useModalStore((state) => state.zIndex);

  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    console.log("WPM MGT closed");
    setIsModalOpen(false);
  };

  const actions = [
    {
      label: "Cancel",
      onClick: closeModal,
      className:
        "bg-white border border-violet-600 text-violet-600 hover:bg-violet-700 hover:text-white",
    },
    {
      label: "Save",
      onClick: () => {
        // Perform save action
        alert("Saved!");
        closeModal();
      },
      className: "bg-violet-700 text-white hover:bg-violet-600",
    },
  ];
  console.log("z-index1 : ", zIndex);
  return (
    <>
      {isModalOpen && (
        <Modal
          title="Wps Management"
          onClose={closeModal}
          actions={actions}
          customWidth="w-1/4"
          customHeight="h-1/2"
          zIndex={zIndex}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sequi
            accusantium eius tempore voluptatibus necessitatibus amet quasi
            omnis numquam corporis, magni nostrum earum nam odit iste sed
            doloribus ratione cum.
          </p>
        </Modal>
      )}
    </>
  );
};

export default WpmMgt;
