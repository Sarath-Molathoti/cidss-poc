// src/AgGridTable.js
"use client";
// src/AgGridTable.js

import React, { useState, useRef, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const ElectronicsTable = () => {
  const [columnDefs] = useState([
    {
      headerName: "Name",
      field: "name",
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: "Type",
      field: "type",
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: "Price",
      field: "price",
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: "Quantity",
      field: "quantity",
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: "Expiry Date",
      field: "expiryDate",
      sortable: true,
      filter: true,
      flex: 1,
    },
  ]);

  const [gridOptions] = useState({
    pagination: true,
    paginationPageSize: 5, // Number of rows per page
  });

  const rowData = [
    {
      name: "Laptop A",
      type: "Laptop",
      price: 1200,
      quantity: 20,
      expiryDate: "2025-12-31",
    },
    {
      name: "Smartphone B",
      type: "Smartphone",
      price: 800,
      quantity: 50,
      expiryDate: "2024-11-30",
    },
    {
      name: "Tablet C",
      type: "Tablet",
      price: 500,
      quantity: 30,
      expiryDate: "2026-10-29",
    },
    {
      name: "Monitor D",
      type: "Monitor",
      price: 300,
      quantity: 15,
      expiryDate: "2023-09-28",
    },
    {
      name: "Headphones E",
      type: "Headphones",
      price: 150,
      quantity: 100,
      expiryDate: "2025-08-27",
    },
    {
      name: "Laptop F",
      type: "Laptop",
      price: 1100,
      quantity: 25,
      expiryDate: "2026-07-26",
    },
    {
      name: "Smartphone G",
      type: "Smartphone",
      price: 750,
      quantity: 60,
      expiryDate: "2023-06-25",
    },
    {
      name: "Tablet H",
      type: "Tablet",
      price: 550,
      quantity: 40,
      expiryDate: "2024-05-24",
    },
    {
      name: "Monitor I",
      type: "Monitor",
      price: 350,
      quantity: 20,
      expiryDate: "2025-04-23",
    },
    {
      name: "Headphones J",
      type: "Headphones",
      price: 200,
      quantity: 90,
      expiryDate: "2026-03-22",
    },
  ];

  const gridRef = useRef(null);

  const onGridReady = useCallback((params) => {
    gridRef.current = params.api;
    params.api.sizeColumnsToFit();
    window.addEventListener("resize", () => params.api.sizeColumnsToFit());
  }, []);

  return (
    <div className="flex flex-col h-[55vh] w-screen p-4">
      <div
        className="ag-theme-alpine flex-grow"
        style={{ height: "100%", width: "100%" }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          gridOptions={gridOptions}
          defaultColDef={{ sortable: true, filter: true }}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
};

export default ElectronicsTable;
