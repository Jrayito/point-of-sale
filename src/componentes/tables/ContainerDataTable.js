import "../../style/paginator.css";
import React, { useRef, useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useSidebar } from "../../context/sidebarContext";
import { ButtonAccion } from "../buttons/ButtonAccion.js";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as xlsx from "xlsx/xlsx.mjs";

export const ContainerDataTable = ({
  headers,
  items,
  filters,
  dataExport,
  children,
}) => {
  const dataTableRef = useRef();
  const [exportColumns, setExportColumns] = useState([]);
  const [headerColumns, setHeaderColumns] = useState([]);
  const { broken } = useSidebar();

  useEffect(() => {
    setExportColumns(headers.map((col) => col.code));
    setHeaderColumns(headers.map((col) => col.header));
  }, [headers]);

  const exportCSV = (selectionOnly) => {
    dataTableRef.current.exportCSV({ selectionOnly });
  };

  const exportInformacion = dataExport.map((item) =>
    exportColumns.map((column) => item[column])
  );

  const mappedData = dataExport.map((item) => {
    const newItem = {};
    headers.forEach((head) => {
      // console.log(head);
      newItem[head.header] = item[head.code];
    });
    return newItem;
  });

  const exportPdf = () => {
    const doc = new jsPDF();
    autoTable(doc, {
      head: [headerColumns],
      body: exportInformacion,
    });
    doc.save("items.pdf");
  };

  const exportExcel = () => {
    const worksheet = xlsx.utils.json_to_sheet(mappedData);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
    const excelBuffer = xlsx.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    saveAsExcelFile(excelBuffer, "items");
  };

  const saveAsExcelFile = (buffer, fileName) => {
    import("file-saver").then((module) => {
      if (module && module.default) {
        let EXCEL_TYPE =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        let EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], {
          type: EXCEL_TYPE,
        });

        module.default.saveAs(
          data,
          fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
        );
      }
    });
  };

  const header = (
    <div className="d-flex align-items-center justify-content-end gap-2 my-2">
      <ButtonAccion
        description={"Descargar CSV"}
        icon="description"
        onHandleAccion={() => exportCSV(false)}
      />
      <ButtonAccion
        description={"Descargar Excel"}
        icon="task"
        onHandleAccion={exportExcel}
      />
      <ButtonAccion
        description={"Descargar PDF"}
        icon="picture_as_pdf"
        onHandleAccion={exportPdf}
      />
    </div>
  );

  return (
    <DataTable
      ref={dataTableRef}
      value={items}
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
      header={header}
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
          body={col.body ?? null}
          bodyStyle={{ textAlign: col.textAlign }}
        />
      ))}
      {children}
    </DataTable>
  );
};
