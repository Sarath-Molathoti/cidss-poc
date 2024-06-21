"use client";
import React, { useState } from "react";
import Modal from "../../../components/Modal";
import PieChart from "../../../components/charts/PieChart";
const LgsOverview = () => {
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

  const pieData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f0e"];
  return (
    <>
      {isModalOpen && (
        <Modal
          title="Lgs Overview"
          onClose={closeModal}
          actions={actions}
          customWidth="w-9/10"
          customHeight="h-7/8"
        >
          <div className="grid grid-flow-row grid-cols-3 gap-3">
            <div className="border-2 border-slate-800">
              <PieChart
                data={pieData}
                colors={colors}
                width={400}
                height={300}
                innerRadius={1} // Adjust inner radius
                outerRadius={100} // Adjust outer radius
                label={true}
                labelLine={false}
                legendProps={{
                  align: "right",
                  verticalAlign: "top",
                  iconType: "rect",
                }}
              />
            </div>
            <div className="border-2 border-slate-800">
              <PieChart
                data={pieData}
                colors={colors}
                width="100%"
                height={300}
                innerRadius={1} // Adjust inner radius
                outerRadius={100} // Adjust outer radius
                label={true}
                labelLine={false}
                legendProps={{
                  align: "right",
                  verticalAlign: "top",
                  iconType: "rect",
                }}
              />
            </div>
            <div className="border-2 border-slate-800">
              <PieChart
                data={pieData}
                colors={colors}
                width="100%"
                height={300}
                innerRadius={1} // Adjust inner radius
                outerRadius={100} // Adjust outer radius
                label={true}
                labelLine={false}
                legendProps={{
                  align: "right",
                  verticalAlign: "top",
                  iconType: "rect",
                }}
              />
            </div>
            <div className="border-2 border-slate-800">
              <PieChart
                data={pieData}
                colors={colors}
                width={400}
                height={300}
                innerRadius={1} // Adjust inner radius
                outerRadius={100} // Adjust outer radius
                label={true}
                labelLine={false}
                legendProps={{
                  align: "right",
                  verticalAlign: "top",
                  iconType: "rect",
                }}
              />
            </div>
            <div className="border-2 border-slate-800">
              <PieChart
                data={pieData}
                colors={colors}
                width={400}
                height={300}
                innerRadius={1} // Adjust inner radius
                outerRadius={100} // Adjust outer radius
                label={true}
                labelLine={false}
                legendProps={{
                  align: "right",
                  verticalAlign: "top",
                  iconType: "rect",
                }}
              />
            </div>
            <div className="border-2 border-slate-800">
              <PieChart
                data={pieData}
                colors={colors}
                width={400}
                height={300}
                innerRadius={1} // Adjust inner radius
                outerRadius={100} // Adjust outer radius
                label={true}
                labelLine={false}
                legendProps={{
                  align: "right",
                  verticalAlign: "top",
                  iconType: "rect",
                }}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default LgsOverview;
