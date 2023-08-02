import homeLogo from '../../assets/pixil-draw.gif'
import ListaPostagens from '../../componentes/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-black flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Expresse aqui seus pensamentos e opiniões</p>
  
              <div className="flex justify-around gap-4">
              <ModalPostagem />
                <button className='rounded bg-gray-200 text-cyan-800 py-2 px-5 mt-6'>Ver postagens</button>
              </div>
            </div>
  
            <div className="flex justify-center mt-1 ">
              <img src={homeLogo} alt="" className='w-1/2 border-2 border-sky-500 rounded-full' />
      
            </div>
          </div>
        </div>
      <ListaPostagens/>
      </>
    );
}

export default Home;