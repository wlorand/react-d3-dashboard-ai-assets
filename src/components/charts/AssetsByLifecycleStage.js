import React from "react";

import { ResponsiveBar } from "@nivo/bar";

// styles
import "../../styles/asset-catalog-charts.css";

const AssetsByLifecycleStage = ({ data }) => {
  return (
    <div className="chart-container-300">
      <h3 className="chart-title">Assets by Lifecycle Stage</h3>
      <ResponsiveBar
        data={data}
        keys={["assets"]} //
        indexBy="lifecycle_stage" //
        margin={{ top: 10, right: 50, bottom: 110, left: 70 }}
        padding={0.25}
        minValue={0}
        layout="vertical"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={["rgb(0, 215, 215)"]} // array of colors for each bar
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 3,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 3,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Asset Count",
          legendPosition: "middle",
          legendOffset: -45,
        }}
        enableGridX={false}
        enableGridY={true}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default AssetsByLifecycleStage;
