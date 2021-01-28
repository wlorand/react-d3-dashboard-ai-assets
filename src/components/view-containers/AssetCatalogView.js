import React from "react";

// mock data
import asset_product_data from "../../mock-data/asset_product_data.json";
import asset_types_data from "../../mock-data/asset_types_data.json";
import lifecycle_stage_data from "../../mock-data/lifecycle_stage_data.json";

// TODO: Fetch Data here with react-query

// child components
import AssetsByProduct from "../charts/AssetsByProduct";
import AssetTypes from "../charts/AssetTypes";
import AssetsByLifecycleStage from "../charts/AssetsByLifecycleStage";
import AssetCatalogTable from "../tables/AssetCatalogTable";

// styles
import "../../styles/asset-catalog-view.css";

function AssetCatalogView() {
  return (
    <>
      <div className="catalog-header">
        <h1>AI Asset Catalog</h1>
      </div>
      <div className="catalog-chart-container">
        <span className="catalog-chart-bar">
          <AssetsByProduct data={asset_product_data} />
        </span>
        <span className="catalog-chart-pie">
          <AssetTypes data={asset_types_data} />
        </span>
        <span className="catalog-chart-bar">
          <AssetsByLifecycleStage data={lifecycle_stage_data} />
        </span>
      </div>
      <AssetCatalogTable />
    </>
  );
}

export default AssetCatalogView;
