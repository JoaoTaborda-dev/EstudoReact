import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import './Formulario.css'
import { useState } from 'react';

const Formulario = (props) => {


  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({ nome, cargo, imagem, time });
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  }
  return (
    <section className='formulario'>
      <form onSubmit={onSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome aqui" valor={nome} aoAlterado={valor => setNome(valor)} />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo aqui" valor={cargo} aoAlterado={valor => setCargo(valor)} />
        <CampoTexto label="Imagem" placeholder="Passe a url da sua imagem aqui" valor={imagem} aoAlterado={valor => setImagem(valor)} />
        <ListaSuspensa obrigatorio={true} label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  )
}

export default Formulario;