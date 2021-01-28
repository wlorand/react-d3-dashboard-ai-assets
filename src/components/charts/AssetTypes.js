// nivo packages
import { ResponsivePie } from "@nivo/pie";

// styles
import "../../styles/asset-catalog-charts.css";

// Centered Metric
const AssetTotal = ({ dataWithArc, centerX, centerY }) => {
  // todo: replace with a reduce
  let total = 0;
  dataWithArc.forEach((datum) => {
    total += datum.value;
  });

  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      className="asset-categories-total"
    >
      {total}
    </text>
  );
};

const AssetTypes = ({ data }) => {
  return (
    <div className="chart-container-300">
      <h3 className="chart-title">Asset Types</h3>
      <ResponsivePie
        data={data}
        id="asset_type"
        value="assets"
        margin={{ top: 3, right: 70, bottom: 90, left: 70 }}
        sortByValue={true}
        innerRadius={0.5}
        padAngle={2}
        colors={[
          "rgb(255, 220, 0)",
          "rgb(255, 147, 49)",
          "rgb(255, 172, 97)",
          "rgb(127, 208, 0)",
          "rgb(169, 232, 56)",
        ]}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        radialLabelsTextColor="rgb(0, 119, 197)"
        radialLabelsLinkOffset={0}
        radialLabelsLinkColor="#333"
        radialLabelsLinkDiagonalLength={6}
        radialLabel="id"
        sliceLabel="value"
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333"
        layers={["slices", "sliceLabels", "radialLabels", AssetTotal]}
      />
    </div>
  );
};

export default AssetTypes;
