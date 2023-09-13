import React, { useState, useEffect } from "react";
import { Sidebar } from "../componentes/sidebar/Sidebar.js";
import { MainContainer } from "../componentes/MainContainer.js";
import { MainHeader } from "../componentes/MainHeader.js";
import { Loader } from "../componentes/Loader.js";
import { ModalProductoNuevo } from "../componentes/ModalProductoNuevo.js";
import { ButtonAdd } from "../componentes/buttons/ButtonAdd.js";
import { getProducts } from "../controllers/productos.js";
import { ContainerDataTable } from "../componentes/tables/ContainerDataTable.js";
import { FilterMatchMode } from "primereact/api";
import { Dropdown } from "primereact/dropdown";
import { unidadesMedidas } from "../componentes/selects/UnidadMedida.js";

export const Productos = () => {
  const dropDownUnidadMedida = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={unidadesMedidas}
        optionValue="label" // Propiedad que retornar el valor a buscar
        placeholder="Buscar por unidad de medida"
        onChange={(e) => {
          console.log(e);
          options.filterApplyCallback(e.value);
        }}
      />
    );
  };

  const headers = [
    { code: "sku", header: "SKU", filter: true },
    { code: "description", header: "Descripción", filter: true },
    { code: "precioCompra", header: "Precio de Compra", filter: false },
    { code: "precioVenta", header: "Precio de Venta", filter: false },
    {
      code: "unidadMedida.label",
      header: "Unidad de Medida",
      filter: true,
      showFilterMenu: false,
      filterElement: dropDownUnidadMedida,
    },
    { code: "stock", header: "Stock", filter: false },
    { code: "minStock", header: "Stock Mínimo", filter: false },
  ];

  const [filters, setFilters] = useState({
    sku: { value: null, matchMode: FilterMatchMode.CONTAINS },
    "unidadMedida.label": {
      value: null,
      matchMode: FilterMatchMode.CONTAINS,
    },
    description: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  // const globlaFiltersFields = ["sku", "description", "unidadMedida.label"];
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); //Para cambiar el estado del spinner cuando los datos hayan cargado.

  useEffect(() => {
    setProducts([]);
    getProducts().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setProducts((prevState) => [...prevState, doc.data()]);
        setLoading(false);
      });
    });
  }, []);

  return (
    <>
      {loading ? <Loader /> : ""}
      <div className="container-sidebar">
        <Sidebar />
        <MainContainer>
          <MainHeader>
            <ButtonAdd
              targetModal="#ModalProductoNuevo"
              description={"Producto Nuevo"}
            />
          </MainHeader>
          <section className="my-4">
            <h4>Productos</h4>
          </section>
          <div className="card p-3 mt-3">
            <ContainerDataTable
              products={products}
              headers={headers}
              filters={filters}
            />
          </div>
        </MainContainer>
      </div>
      <ModalProductoNuevo />
    </>
  );
};
