import React from 'react';
import "./style.css";
import Header from './components/Header';
import Banner from './components/Banner';
import DemonstracaoBotox from './components/DemonstracaoBotox';
import ListaProcedimentos from './components/ListaProcedimentos';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      {/* <DemonstracaoBotox/> */}
      <ListaProcedimentos/>
    </div>
  );
}

export default App;