import "../../style/paginator.css";
import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useSidebar } from "../../context/sidebarContext";

export const ContainerDataTable = ({ headers, products, filters }) => {
  const { broken } = useSidebar();

  return (
    <DataTable
      value={products}
      size="small"
      stripedRows
      paginator
      rows={25}
      rowsPerPageOptions={[25, 50, 75, 100]}
      scrollable
      scrollHeight={broken ? "500px" : "1000px"}
      tableStyle={{ minWidth: "50rem" }}
      // globalFilterFields={globalFiltersFields}
      filterDisplay="row"
      filters={filters}
    >
      {headers.map((col, i) => (
        <Column
          key={col.code}
          field={col.code}
          header={col.header}
          filter={col.filter}
          filterPlaceholder={"Buscar por " + col.header.toLowerCase()}
          filterField={col.code}
          showFilterMenu={col.showFilterMenu ?? true}
          filterElement={col.filterElement ?? null}
        />
      ))}
    </DataTable>
  );
};
