import React, {useState} from "react";
import { useMemo } from "react";
import AppContext from "./AppContext";

const dataObject = [
  {
    sigla: 'BCFF11',
    cotas: 5,
    precoMedio: 67.38,
    dataCompra: '29/04/2022',
  },
  {
    sigla: 'BRCR11',
    cotas: 5,
    precoMedio: 70.03,
    dataCompra: '29/04/2022',
  },
  {
    sigla: 'MXRF11',
    cotas: 10,
    precoMedio: 9.53,
    dataCompra: '17/05/2022',
  },
  {
    sigla: 'HCTR11',
    cotas: 2,
    precoMedio: 106.88,
    dataCompra: '29/04/2022',
  },
  {
    sigla: 'XPPR11',
    cotas: 5,
    precoMedio: 58.55,
    dataCompra: '29/04/2022',
  },
  {
    sigla: 'TORD11',
    cotas: 6,
    precoMedio: 8.28,
    dataCompra: '16/08/2022',
  },
];

function AppProvider({children}) {
  const [data, setData] = useState(dataObject)
  const [userName , setUserName] = useState('Giverson Ortiz')

  const context = useMemo(() => ({data, userName, setData, setUserName}), [data, userName]);

  return(
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );   
}

export default AppProvider;