function Interprete(props) {
  const {foto, nombre} = props;

  return (
    <div className="bg-white shadow-md  overflow-hidden rounded-2xl flex flex-col items-center text-left w-80 p-5">
      <img className="w-80 h-90 object-cover rounded-2xl" src={foto} alt={nombre}/>
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2 pt-5">{nombre}</h2>
        <p >{props.children}</p>
      </div>
    </div>
  )
}

export default Interprete
