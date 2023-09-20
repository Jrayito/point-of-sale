import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../controllers/productos";
import { Loader } from "../componentes/Loader";
import { Sidebar } from "../componentes/sidebar/Sidebar.js";
import { MainContainer } from "../componentes/MainContainer.js";
import { MainHeader } from "../componentes/MainHeader";
import { Breadcrumb } from "../componentes/Breadcrumb.js";

export const DetalleProducto = () => {
  let { productoId } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const paths = [{ path: "/productos", head: "Productos" }];

  useEffect(() => {
    setProduct({});
    getProduct(productoId).then((product) => {
      setProduct(product);
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
          <Breadcrumb paths={paths} />
        </MainContainer>
      </div>
    </>
  );
};
