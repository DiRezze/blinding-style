import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import ToolBar from './components/toolsBar'
import ParamSelector from './components/paramControl';

function App() {
  return (
    <>
    <main>
      <ToolBar />
      <div className='d-flex flex-row app-main-frame' id='app-box'>
        <div>
          <div className='card' id='app-card'>Conteúdo Teste</div>
        </div>
        <div>
          <h2>Parâmetros</h2>
          <ParamSelector min={0} max={32} setId={'borderRadiusPar'} />
        </div>
      </div>
    </main>
    </>
  )
}

export default App
