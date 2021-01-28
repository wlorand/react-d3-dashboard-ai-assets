// child components
import TextColumnFilter from "./TextColumnFilter";

export const catalogColumns = [
  {
    Header: "Asset Name",
    accessor: "asset_name",
    Filter: TextColumnFilter,
  },
  {
    Header: "Asset Type",
    accessor: "asset_type",
    Filter: TextColumnFilter,
  },
  {
    Header: "Customer Benefit",
    accessor: "cust_benefit",
    Filter: TextColumnFilter,
  },

  {
    Header: "Consumers",
    accessor: "consumer_count",
    Filter: TextColumnFilter,
  },
  {
    Header: "Monthly Cost",
    accessor: "monthly_cost",
    Filter: TextColumnFilter,
  },
  {
    Header: "Lifecycle Stage",
    accessor: "lifecycle_stage",
    Filter: TextColumnFilter,
  },
];
