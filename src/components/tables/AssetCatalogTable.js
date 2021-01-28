import React, { useMemo } from "react";

// libs
import { useTable, useFilters, useGlobalFilter, useSortBy } from "react-table";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

// child components
import CatalogGlobalFilter from "./table-utils/CatalogGlobalFilter";

// data and data utils
import catalog_table_data from "../../mock-data/catalog_table_data.json";
import { catalogColumns } from "./table-utils/catalogColumns";

// styles
import "../../styles/asset-catalog-table.css";

function AssetCatalogTable() {
  // memo-ize our cols and data for performance
  const catColumns = useMemo(() => catalogColumns, []);
  const catData = useMemo(() => catalog_table_data, []);

  // create table instance from a call to useTable

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns: catColumns,
      data: catData,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;

  return (
    <>
      <CatalogGlobalFilter
        filterValue={globalFilter}
        setFilter={setGlobalFilter}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* render the sort icons with nested ternary */}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <FaSortDown className="sort-icon" />
                    ) : (
                      <FaSortUp className="sort-icon" />
                    )
                  ) : (
                    <FaSort className="sort-icon" />
                  )}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default AssetCatalogTable;
