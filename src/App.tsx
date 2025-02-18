function App() {
 
  let description = "Nuestros servicios se enfocan en la instalación profesional de todo tipo de aberturas, desde ventanas hasta puertas y portones. Con meticulosidad y precisión, con mas de 20 años de experiencia en el rubro, garantizamos un trabajo impecable que mejora la estética y funcionalidad de tu espacio. Confía en nosotros para transformar tu hogar o negocio con aberturas de  calidad y un servicio confiable.";

  return (
    <div className="flex flex-col items-center">  
      <h1 className="p-0 mt-10">Mario Benitez</h1>
      <h2>Colocacion Aberturas</h2>
      <p className="m-14 h-[60dvh] text-[2.5rem]">{description}</p>
    </div>
  )
  
}

export default App