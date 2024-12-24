import React from "react";

const ChartIcon = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke = "currentColor",
}: {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chart-no-axes-column-decreasing"
    >
      <path d="M12 20V10" />
      <path d="M18 20v-4" />
      <path d="M6 20V4" />
    </svg>
  );
};

export default ChartIcon;
