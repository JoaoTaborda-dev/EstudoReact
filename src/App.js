import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite seu nome aqui"/>
      <CampoTexto label="Cargo" placeholder="Digite seu cargo aqui" />
      <CampoTexto label="Imagem" placeholder="Passe a url da sua imagem aqui"/>
    </div>
  );
}

export default App;
