"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import LineChart from "@/components/charts/LineChart";
import PieChart from "@/components/charts/PieChart";
import Modal from "@/components/Modal";
import Logo from "../../assets/images/flag.jpg";
// Dynamically import the IndiaMap component to prevent SSR issues
const IndiaMap = dynamic(() => import("../../components/IndiaMap"), {
  ssr: false,
});

const Content = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  const lines = [
    { dataKey: "pv", stroke: "#8884d8", strokeWidth: 2, activeDot: { r: 8 } },
    { dataKey: "uv", stroke: "#82ca9d", strokeWidth: 2, activeDot: { r: 8 } },
  ];

  const pieData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f0e"];
  return (
    <div className="h-full w-full bg-gray-100">
      {/* <div>
        <IndiaMap />
      </div> */}
      {/* <LineChart
        data={data}
        lines={lines}
        cartesianGrid={{ strokeDasharray: "3 3" }}
        xAxisProps={{ dataKey: "name", stroke: "#000" }}
        yAxisProps={{ stroke: "#000" }}
        tooltipProps={{ cursor: false }}
        legendProps={{ align: "right", verticalAlign: "top", iconType: "rect" }}
      />
      <PieChart
        data={pieData}
        colors={colors}
        width="100%"
        height={400}
        innerRadius={1} // Adjust inner radius
        outerRadius={100} // Adjust outer radius
        label={true}
        labelLine={false}
        legendProps={{ align: "right", verticalAlign: "top", iconType: "rect" }}
      /> */}

      <button
        onClick={handleOpenModal}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Modal Title"
        logo={Logo} // Replace with the actual path to your logo
        actions={
          <>
            <button
              onClick={handleCloseModal}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              onClick={() => alert("Action confirmed")}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Confirm
            </button>
          </>
        }
      >
        <p>This is the body content of the modal.</p>
      </Modal>
    </div>
  );
};

export default Content;
