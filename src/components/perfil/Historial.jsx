import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { setOrdenConItems } from "../../store/ordenConItems";
import { Link } from "react-router-dom";

export default function Historial() {
  const dispatch = useDispatch();
  const { ordenConItems } = useSelector((state) => state);

  React.useEffect(() => {
    dispatch(setOrdenConItems());
  }, [dispatch]);
  return (
    <div style={{ fontFamily: "font-weight", fontSize: "15px" }}>
      <Table striped bordered hover variant="blue">
        <thead>
          <tr>
            <th>Numero De Orden</th>
            <th>Producto/s</th>
            <th>Precio Final</th>
            <th>Valorar compra</th>
          </tr>
        </thead>
        <tbody>
          {ordenConItems.length
            ? ordenConItems.map((orden) => {
                return (
                  <tr key={orden.id}>
                    <td>{orden.id}</td>
                    <td>
                      <p>
                        {orden.products
                          .map((producto) => {
                            return `${producto.quantity} ${producto.title} ${producto.marca}`;
                          })
                          .join(", ")}
                      </p>
                    </td>
                    <td>
                      {orden.products.reduce((a, b) => {
                        return (a += b.price * b.quantity);
                      }, 0)}
                    </td>
                    <td>
                      <Link to={`/valoraciones/${orden.id}`}>Ir</Link>
                    </td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </Table>
    </div>
  );
}
