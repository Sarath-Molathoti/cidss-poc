"use client";
import React, { useState } from "react";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import SearchBar from "../../../components/SearchBar";
import { IoCloudUploadOutline, IoCloudDownloadOutline } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import ElectronicsTable from "./ElectronicsTable";
import WpmMgt from "../wpn-mgt/page";
const Electronics = () => {
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
  const handleAddProduct = () => {
    console.log("Clicked on Add Product");
  };
  return (
    <div>
      {isModalOpen && (
        <Modal
          title="Electronics"
          onClose={closeModal}
          actions={actions}
          customWidth="w-1/2"
          customHeight="h-5/10"
        >
          <div className="flex flex-col ">
            <div className="flex items-center justify-between">
              <h1 className="text-bold text-violet-800 text-xl lg:text-3xl">
                Products
              </h1>
              <Button
                className="bg-violet-800 text-white text-base p-2 rounded-md"
                onClick={() => handleAddProduct()}
              >
                Add Product
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <SearchBar
                placeholder="Search"
                className=" w-2/3 py-3 "
                inputClassName="bg-violet-200"
              />
              <div>
                <Button
                  variant="primary"
                  size="lg"
                  className="border-0 text-violet-500"
                  prefixIcon={IoCloudDownloadOutline}
                >
                  Import
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  className="border-0 text-violet-500 pl-5"
                  prefixIcon={IoCloudUploadOutline}
                >
                  Export
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  className="border-0 text-violet-500 pl-5"
                  suffixIcon={IoIosMore}
                >
                  More
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center pt-5">
              <ElectronicsTable />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Electronics;
