import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../controllers/productos";
import { Loader } from "../componentes/Loader";
import { Sidebar } from "../componentes/sidebar/Sidebar.js";
import { MainContainer } from "../componentes/MainContainer.js";
import { MainHeader } from "../componentes/MainHeader";
import { Breadcrumb } from "../componentes/Breadcrumb.js";
import { SubEncabezado } from "../componentes/subencabezado";
import { BasicInformationProduct } from "../componentes/tables/BasicInformationProduct";
import { Message } from "primereact/message";

export const DetalleProducto = () => {
  let { productoId } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const paths = [{ path: "/productos", head: "Productos" }];

  useEffect(() => {
    setProduct({});
    getProduct(productoId).then((product) => {
      setProduct(product);
      console.log(product);
      setLoading(false);
    });
  }, [productoId]);

  return (
    <>
      {loading ? <Loader /> : ""}
      <div className="container-sidebar">
        <Sidebar />
        <MainContainer>
          <MainHeader />
          <Breadcrumb paths={paths}>
            <li className="breadcrumb-item text-success">
              <b>{product.description}</b>
            </li>
          </Breadcrumb>
          <section className="my-4">
            <h4>Detalles de producto</h4>
          </section>
          <section className="row mt-3">
            <div className="col-md-6">
              <div className="card p-3">
                {product.stock < product.minStock && (
                  <Message
                    style={{ marginBottom: "0.5rem" }}
                    severity="error"
                    text="El stock de este producto está por debajo del mínimo requerido."
                  />
                )}

                <BasicInformationProduct
                  description={product.description}
                  sku={product.sku}
                  unidadMedida={
                    (product &&
                      product.unidadMedida &&
                      product.unidadMedida.label) ??
                    ""
                  }
                  stock={product.stock}
                  precioCompra={product.precioCompra}
                  precioVenta={product.precioVenta}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-3">
                <SubEncabezado nameIcon="trending_up" subtitle="Movimientos" />
              </div>
            </div>
          </section>
        </MainContainer>
      </div>
    </>
  );
};
