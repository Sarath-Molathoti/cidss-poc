"use client";
import React, { useState } from "react";
import TextField from "../../../components/TextField";
import CustomSelect from "../../../components/CustomSelect";
import CommentInput from "../../../components/CommentInput";
import { ValidateForm } from "../../../utils/ValidateForm";
const AddProduct = ({ onSubmit }) => {
  const [productDetails, setProductDetails] = useState({
    productNumber: "",
    supplier: "",
    barcode: "",
    productName: "",
    supplierNumber: "",
    customsCode: "",
    storeNumber: "",
    productGroup: "",
    weight: "",
    displayName: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    productNumber: "",
    supplier: "",
    barcode: "",
    productName: "",
    supplierNumber: "",
    customsCode: "",
    storeNumber: "",
    productGroup: "",
    weight: "",
    displayName: "",
    description: "",
  });

  const productGroups = [
    { value: "Knives and Bayonets", label: "Knives and Bayonets" },
    { value: "Infantry weapons", label: "Infantry weapons" },
    { value: "Artillery", label: "Artillery" },
    { value: "Small arms", label: "Small arms" },
  ];

  const validationRules = {
    productName: { required: true, label: "ProductName" },
    productNumber: { required: true, label: "Product Number" },
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("------------------------------------------------");
    const validationErrors = ValidateForm(productDetails, validationRules);
    setErrors(validationErrors);
    onSubmit();
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-violet-950">Product Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-x-3 mt-4">
          <TextField
            label="Product Number"
            id="productNumber"
            placeholder="Enter product number"
            value={productDetails.productNumber}
            onChange={handleInputChange}
            containerClassName="mb-2"
            labelClassName="text-gray-800 text-base  lg:text-md"
            inputClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50 py-2"
            error={errors.productNumber}
          />
          <TextField
            label="Supplier"
            id="supplier"
            placeholder="Enter supplier name"
            value={productDetails.supplier}
            onChange={handleInputChange}
            containerClassName="mb-2"
            labelClassName="text-gray-800 text-base  lg:text-md"
            inputClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50 py-2"
            error={errors.supplier}
          />
          <TextField
            label="Barcode"
            id="barcode"
            placeholder="Enter barcode"
            value={productDetails.barcode}
            onChange={handleInputChange}
            containerClassName="mb-2"
            labelClassName="text-gray-800 text-base  lg:text-md"
            inputClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50 py-2"
            error={errors.barcode}
          />
          <TextField
            label="Product Name"
            id="productName"
            placeholder="Enter product name"
            value={productDetails.productName}
            onChange={handleInputChange}
            containerClassName="mb-2"
            labelClassName="text-gray-800 text-base  lg:text-md"
            inputClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50 py-2"
            error={errors.productName}
          />
          <TextField
            label="Supplier Number"
            id="supplierNumber"
            placeholder="Enter supplier number"
            value={productDetails.supplierNumber}
            onChange={handleInputChange}
            containerClassName="mb-2"
            labelClassName="text-gray-800 text-base  lg:text-md"
            inputClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50 py-2"
            error={errors.supplierNumber}
          />
          <TextField
            label="Customs Code"
            id="customsCode"
            placeholder="Enter customs code"
            value={productDetails.customsCode}
            onChange={handleInputChange}
            containerClassName="mb-2"
            labelClassName="text-gray-800 text-base  lg:text-md"
            inputClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50 py-2"
            error={errors.customsCode}
          />
          <TextField
            label="Store Number"
            id="storeNumber"
            placeholder="Enter store number"
            value={productDetails.storeNumber}
            onChange={handleInputChange}
            containerClassName="mb-2"
            labelClassName="text-gray-800 text-base  lg:text-md"
            inputClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50 py-2"
            error={errors.storeNumber}
          />
          <div></div>
          <div></div>
          <CustomSelect
            label="Product Group"
            id="productGroup"
            placeholder="Select Product Group"
            options={productGroups}
            value={productDetails.productGroup}
            onChange={handleInputChange}
            containerClassName="mb-2"
            labelClassName="text-gray-800 text-base lg:text-md"
            selectClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50 py-2"
            error={errors.productGroup}
          />
          <TextField
            label="Weight"
            id="weight"
            placeholder="Enter weight"
            value={productDetails.weight}
            onChange={handleInputChange}
            containerClassName="mb-2"
            labelClassName="text-gray-800 text-base  lg:text-md"
            inputClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50 py-2"
            error={errors.weight}
          />

          <TextField
            label="Display Name"
            id="displayName"
            placeholder="Enter display name"
            value={productDetails.displayName}
            onChange={handleInputChange}
            containerClassName="mb-2"
            labelClassName="text-gray-800 text-base  lg:text-md"
            inputClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50 py-2"
            error={errors.displayName}
          />
          <div className="col-span-3">
            <CommentInput
              label="Description"
              id="description"
              placeholder="Enter description"
              value={productDetails.description}
              onChange={handleInputChange}
              containerClassName="mb-2"
              labelClassName="text-gray-800 text-base  lg:text-md"
              inputClassName="border-violet-800 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:ring-opacity-50 py-2"
              error={errors.description}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
