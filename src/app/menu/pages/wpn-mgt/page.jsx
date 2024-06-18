"use client";
import React, { useState } from "react";
import Modal from "@/components/Modal";

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
    <div className="h-full w-full bg-gray-100">
      {/* <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Open Modal
      </button> */}
      {isModalOpen && (
        <Modal
          title="Modal Title"
          onClose={closeModal}
          actions={actions}
          customWidth="w-1/4"
          customHeight="h-1/4"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sequi
            accusantium eius tempore voluptatibus necessitatibus amet quasi
            omnis numquam corporis, magni nostrum earum nam odit iste sed
            doloribus ratione cum.
          </p>
        </Modal>
      )}
    </div>
  );
};

export default WpmMgt;
