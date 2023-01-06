import React, { useContext } from 'react';
import AppContext from "../context/AppContext";

function Header() {
  const { userName } = useContext(AppContext)
  console.log(userName);
  return(
    <div>
      <h1>Header</h1>
      <p>Bem Vindo {userName}</p>
    </div>
  );
}

export default Header;