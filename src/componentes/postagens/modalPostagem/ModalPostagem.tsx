import FormularioPostagem from '../formularioPostagem/FormularioPostagem';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalPostagem.css'

function ModalPostagem() {
  return (
    <>
      <Popup 
      trigger={<button className='hover:text-sky-200 rounded border-4 border-stone-700/50 bg-gradient-to-r from-blue-950 from-2% via-stone-950 via-50% to-blue-950 to-2% hover:transition duration-300 transition-transform transform hover:scale-110 text-white py-3 px-3 mt-2'>NOVA POSTAGEM</button>} modal>
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;