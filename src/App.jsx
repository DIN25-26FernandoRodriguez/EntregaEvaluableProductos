
import Contenedor from './Contenedor'
import Interprete from './Interprete'

function App() {

  return (
    <>
      <h1 className="contenedor__h1 items-center text-center">Mis Intérpretes</h1>  
      <p className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-color-primary text-2xl tracking-[0] leading-[normal] whitespace-nowrap items-center text-center pt-2">Lista de interpretes disponibles:</p>
<Contenedor>
  <div className="flex justify-center items-center roun pt-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      <Interprete className="interpretes" nombre="Marlon Brando" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/270px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png">
        Marlon Brando fue un influyente actor estadounidense...
      </Interprete>
      <Interprete className="interpretes" nombre="Al Pacino" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/220px-Al_Pacino.jpg">
        Al Pacino es un actor y director de cine estadounidense...
      </Interprete>
      <Interprete className="interpretes" nombre="Marlon Brando" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/270px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png">
        Marlon Brando fue un influyente actor estadounidense...
      </Interprete>
      <Interprete className="interpretes" nombre="Al Pacino" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/220px-Al_Pacino.jpg">
        Al Pacino es un actor y director de cine estadounidense...
      </Interprete>
    </div>
  </div>
</Contenedor>
    </>
  )
}

export default App
