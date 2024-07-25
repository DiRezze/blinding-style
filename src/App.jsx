import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import ToolBar from './components/toolsBar'
import React, { useState } from 'react';
import ParamSelector from './components/paramControl';

function App() {
  const [cssValues, setCssValues] = useState({
    borderRadius: 8,
    blur: 0,
    saturation: 0,
    opacity: 100
  });

  const handleCssChange = (property, value) => {
    setCssValues((prevValues) => ({
      ...prevValues,
      [property]: value
    }));
  };
  return (
    <>
    <main>
      <ToolBar />
      <div className='d-flex flex-row app-main-frame' id='app-box'>
        <div>
          <div 
            className='card' 
            id='app-card' 
            style={{ 
              borderRadius: `${cssValues.borderRadius}px`, 
              opacity: `${cssValues.opacity}%`,
              backdropFilter: `blur(${cssValues.blur}px) saturation(${`cssValues.saturaion`}%)`

            }}
          >Conteúdo Teste</div>
        </div>
        <div>
          <h2>Parâmetros</h2>
          <ParamSelector 
            label="Raio da Borda"
            min={0} 
            max={32} 
            setId="borderRadiusRange" 
            property="borderRadius" 
            value={cssValues.borderRadius} 
            handleCssChange={handleCssChange} 
          />
          <ParamSelector 
            label="Saturação do Fundo"
            min={0} 
            max={250} 
            setId="saturationRange" 
            property="saturation" 
            value={cssValues.saturation} 
            handleCssChange={handleCssChange} 
          />
          <ParamSelector 
            label="Desfoque do Fundo"
            min={0} 
            max={100} 
            setId="blurRange" 
            property="blur" 
            value={cssValues.blur} 
            handleCssChange={handleCssChange} 
          />
          <ParamSelector 
            label="Opacidade"
            min={0} 
            max={100} 
            setId="opacityRange" 
            property="opacity" 
            value={cssValues.opacity} 
            handleCssChange={handleCssChange} 
          />
        </div>
      </div>
    </main>
    </>
  )
}

export default App
