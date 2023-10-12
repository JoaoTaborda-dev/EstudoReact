import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Programacão',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Marketing',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Design',
      corPrimaria: '#E06869',
      corSecundaria: '#FDE7E8',
    }
  ]
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
    console.log(colaboradores);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(
        time => <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}
      <Rodape />
    </div>
  );
}

export default App;
