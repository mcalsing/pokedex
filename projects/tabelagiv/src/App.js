import React from 'react';
import './App.css';
import Provider from './context/AppProvider';
import Table from './componets/Table';
import Header from './componets/Header';

function App() {
  return (
    <Provider>
      <div>
        <Header />
        <Table />
      </div>
    </Provider>
  );
}

export default App;