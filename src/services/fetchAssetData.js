/**
 * File: fetchAssetData.js
 * Desc: central place to fetch API data for the Asset Catalog View
 */
import axios from "axios";

// Multiple diffs in the E2E to PRD URLs prevent the use of an {env} variable and causes the code duplication you see below
// const env = 'prd'
// const env = 'e2e'
// TODO: put in urls below via js template literal `${env}`

// Define endpoint Base URLs
const ASSET_CATALOG_PROD_URL = `https://intlgntsys-mlservices-prd-aimm-core.tech-ai-2-prod-usw2.iks.a.intuit.com/api/2.0/assets`;

const ASSET_CATALOG_E2E_URL = `https://intlgntsys-mlservices-e2e-aimm-core.tech-ai-2-ppd-usw2.iks.a.intuit.com/api/2.0/assets`;

const ASSET_SUMMARY_PROD_URL =
  "https://intlgntsys-mlservices-prd-aimm-core.tech-ai-2-prod-usw2.iks.a.intuit.com/api/2.0/assetsSummaryData";

const ASSET_SUMMARY_E2E_URL =
  "https://intlgntsys-mlservices-e2e-aimm-core.tech-ai-2-ppd-usw2.iks.a.intuit.com/api/2.0/assetsSummaryData";

const ASSET_TYPE_PROD_URL =
  "https://intlgntsys-mlservices-prd-aimm-core.tech-ai-2-prod-usw2.iks.a.intuit.com/api/2.0/assetsSummaryData?data=byAssetType";

const ASSET_TYPE_E2E_URL =
  "https://intlgntsys-mlservices-e2e-aimm-core.tech-ai-2-ppd-usw2.iks.a.intuit.com/api/2.0/assetsSummaryData?data=byAssetType";

const ASSET_PRODUCT_PROD_URL =
  "https://intlgntsys-mlservices-prd-aimm-core.tech-ai-2-prod-usw2.iks.a.intuit.com/api/2.0/assetsSummaryData?data=byProductOffering";

const ASSET_PRODUCT_E2E_URL =
  "https://intlgntsys-mlservices-e2e-aimm-core.tech-ai-2-ppd-usw2.iks.a.intuit.com/api/2.0/assetsSummaryData?data=byProductOffering";

const ASSET_LIFECYCLE_PROD_URL =
  "https://intlgntsys-mlservices-prd-aimm-core.tech-ai-2-prod-usw2.iks.a.intuit.com/api/2.0/assetsSummaryData?data=byLifecycleStage";

const ASSET_LIFECYCLE_E2E_URL =
  "https://intlgntsys-mlservices-e2e-aimm-core.tech-ai-2-ppd-usw2.iks.a.intuit.com/api/2.0/assetsSummaryData?data=byLifecycleStage";

// export
// Fetch Asset Catalog Table Data
export const fetchAssetCatalogData = async () => {
  const data = await axios.get(ASSET_CATALOG_PROD_URL).then((res) => res.data);
  return data;
};

// Fetch Asset Summary Data
export const fetchAssetSummaryData = async () => {
  const data = await axios.get(ASSET_SUMMARY_PROD_URL).then((res) => res.data);
  return data;
};

// Fetch Asset Type Summary Data
export const fetchAssetTypeData = async () => {
  const data = await axios.get(ASSET_TYPE_PROD_URL).then((res) => res.data);
  return data;
};

// Fetch Asset Product Offering Summary Data
export const fetchAssetProductData = async () => {
  const data = await axios.get(ASSET_PRODUCT_PROD_URL).then((res) => res.data);
  return data;
};

// Fetch Asset Lifecycle Stage Summary Data
export const fetchAssetLifecycleData = async () => {
  const data = await axios
    .get(ASSET_LIFECYCLE_PROD_URL)
    .then((res) => res.data);
  return data;
};
