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
import { formatCurrency } from "../controllers/funciones.js";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";

export const Productos = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); //Para cambiar el estado del spinner cuando los datos hayan cargado.
  const [filters, setFilters] = useState({
    sku: { value: null, matchMode: FilterMatchMode.CONTAINS },
    "unidadMedida.label": {
      value: null,
      matchMode: FilterMatchMode.CONTAINS,
    },
    description: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const dropDownUnidadMedida = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={unidadesMedidas}
        optionValue="label" // Propiedad que retornar el valor a buscar
        placeholder="Buscar por unidad de medida"
        onChange={(e) => {
          options.filterApplyCallback(e.value);
        }}
      />
    );
  };
  const dataExport = products.map((item) => ({
    ...item,
    "unidadMedida.label": item.unidadMedida.label,
  }));

  const templeatePrice = (product, column) => {
    const field = column.field;
    if (field === "precioVenta" || field === "precioCompra") {
      return formatCurrency(product[field]);
    }
  };

  const templeteAcciones = (product) => {
    return (
      <div className="btn-group">
        <button
          className="btn btn-primary btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Acciones
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link
              to={`/detallesProducto/${product.id}`}
              className="dropdown-item"
            >
              Detalles
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  const headers = [
    { code: "sku", header: "SKU", filter: true, textAlign: "left" },
    {
      code: "description",
      header: "Descripción",
      filter: true,
      textAlign: "left",
    },
    {
      code: "precioCompra",
      header: "Precio de Compra",
      filter: false,
      body: templeatePrice,
      textAlign: "right",
    },
    {
      code: "precioVenta",
      header: "Precio de Venta",
      filter: false,
      body: templeatePrice,
      textAlign: "right",
    },
    {
      code: "unidadMedida.label",
      header: "Unidad de Medida",
      filter: true,
      showFilterMenu: false,
      filterElement: dropDownUnidadMedida,
      textAlign: "left",
    },
    { code: "stock", header: "Stock", filter: false, textAlign: "left" },
    {
      code: "minStock",
      header: "Stock Mínimo",
      filter: false,
      textAlign: "left",
    },
  ];

  useEffect(() => {
    setProducts([]);
    getProducts().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = { ...doc.data(), id: doc.id };
        setProducts((prevState) => [...prevState, data]);
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
              items={products}
              headers={headers}
              filters={filters}
              dataExport={dataExport}
            >
              <Column body={templeteAcciones} header="Acciones" />
            </ContainerDataTable>
          </div>
        </MainContainer>
      </div>
      <ModalProductoNuevo />
    </>
  );
};
