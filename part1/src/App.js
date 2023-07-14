import './App.css';
import Mensaje from "./Mensaje.js";

/* Los componentes en React tienen mayúscula inicial para que no se confundan con etiquetas html */

// componente «Description»
const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp.</p>
}

// las funciones se puede definir con «function» o con la forma flecha
// solo se puede devolver un elemento con el return, pero utilizando una etiqueta o fragmentos, se pueden renderizar más de un elemento
/* El fragmento se pone tal que:
*  <>
*    <Mensaje color="red" message="Estamos trabajando" />
*    <Mensaje color="green" message="en un curso de React" />
*    <Description />
*  </>
*/
const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" message="Estamos trabajando" />
      <Mensaje color="green" message="en un curso de React" />
      <Description />
    </div>
  );
}

export default App;
