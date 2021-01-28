import { ResponsiveBar } from "@nivo/bar";

// styles
import "../../styles/asset-catalog-charts.css";

const AssetsByProduct = ({ data }) => {
  return (
    <div className="chart-container-300">
      <h3 className="chart-title chart-title-custom">
        Assets by Product Offering
      </h3>
      <ResponsiveBar
        data={data}
        keys={["assets"]}
        indexBy="product_offering"
        margin={{ top: 10, right: 20, bottom: 130, left: 110 }}
        padding={0.1}
        minValue={0}
        layout="horizontal"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colorBy="index"
        colors={[
          "rgb(255, 187, 0)",
          "rgb(100, 54, 175)",
          "rgb(0, 119, 197)",
          "rgb(0, 193, 191)",
          "rgb(213, 43, 30)",
          "rgb(44, 160, 28)",
        ]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 3,
          tickRotation: 0,
          legend: "Asset Count",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 3,
          tickPadding: 5,
          tickRotation: 0,
        }}
        enableGridX={true}
        enableGridY={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={"#FFFFFF"}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default AssetsByProduct;
