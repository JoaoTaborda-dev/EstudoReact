import './CampoTexto.css'

const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label htmlFor="">{props.label}</label>
      <input type="text" placeholder={props.placeholder} />
    </div>
  )
}

export default CampoTexto;