import React, { useContext } from "react";
import AppContext from "../context/AppContext";

function Table() {
  const {data} = useContext(AppContext);
  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>SIGLA | </th>
            <th>COTAS | </th>
            <th>PRECO MEDIO | </th>
            <th>DATA COMPRA | </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key= {item.sigla}>
              <td>{item.sigla}</td>
              <td>{item.cotas}</td>
              <td>{item.precoMedio}</td>
              <td>{item.dataCompra}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>      
  );   
}

export default Table