// import {useState,} from 'react';
import './App.css'
import HomeHookTwo from './componentes/Hooks2';
//import HomeProps from './componentes/Props';
//import HomeHooks from './componentes/Hooks';

/*
const App = () => {
  return (
    <HomeProps
    title='Componente Home'
    description='Este é um componente Home que recebe props'
    />
  );
}
*/


/*
function App(){
  const[valor, setValor] = useState(0);
  function handleClick(){
    setValor(valor + 1);
  }
  return(
    <div>
      <h1>App</h1>
      <p>O valor é: {valor}</p>
      <button onClick={handleClick}>Adicionar 1</button>

    </div>
  );
}
*/

function App() {
 
  return (
    <>
      <HomeHookTwo/>
    </>
  );
}



export default App;