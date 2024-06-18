// components/LineChart.js
"use client";
import React from "react";
import PropTypes from "prop-types";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChart = ({
  data,
  width = "100%",
  height = 400,
  margin = "5 30 20 5", // Tailwind margin classes
  cartesianGrid = { strokeDasharray: "3 3" },
  xAxisProps = {},
  yAxisProps = {},
  tooltipProps = {},
  legendProps = {},
  lines = [],
}) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <RechartsLineChart data={data} margin={margin}>
        <CartesianGrid {...cartesianGrid} />
        <XAxis {...xAxisProps} />
        <YAxis {...yAxisProps} />
        <Tooltip {...tooltipProps} />
        <Legend {...legendProps} />
        {lines.map((line, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={line.dataKey}
            stroke={line.stroke}
            strokeWidth={line.strokeWidth}
            dot={line.dot}
            activeDot={line.activeDot}
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

LineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  margin: PropTypes.string, // Accepts Tailwind CSS margin classes as a string
  cartesianGrid: PropTypes.object,
  xAxisProps: PropTypes.object,
  yAxisProps: PropTypes.object,
  tooltipProps: PropTypes.object,
  legendProps: PropTypes.object,
  lines: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      stroke: PropTypes.string.isRequired,
      strokeWidth: PropTypes.number,
      dot: PropTypes.object,
      activeDot: PropTypes.object,
    })
  ).isRequired,
};

export default LineChart;
