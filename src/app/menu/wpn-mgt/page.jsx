"use client";
import React, { useState } from "react";
import Modal from "../../../components/Modal.jsx";

const WpmMgt = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

  return (
    <>
      {isModalOpen && (
        <Modal
          title="Wps Management"
          onClose={closeModal}
          actions={actions}
          customWidth="w-1/4"
          customHeight="h-1/3"
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
