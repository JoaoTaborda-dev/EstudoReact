import './CampoTexto.css'

const CampoTexto = (props) => {

  const aoDigitar = (event) => {
    props.aoAlterado(event.target.value)
  }
  return (
    <div className="campo-texto">
      <label htmlFor="">{props.label}</label>
      <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} type="text" placeholder={props.placeholder} />
    </div>
  )
}

export default CampoTexto;