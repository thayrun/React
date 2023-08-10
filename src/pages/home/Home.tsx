import homeLogo from '../../assets/pixil-draw.gif'
import ListaPostagens from '../../componentes/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';


function Home() {
    return (
        <>
        <div className="bg-black flex justify-center border-b-2 border-cyan-500">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold font-dosis'>Seja bem vinde!</h2>
              <p className='text-xl font-abel'>Expresse aqui seus pensamentos e opiniões</p>
              <div className="flex justify-around gap-4">
              <ModalPostagem />
                <button className='hover:text-sky-200 rounded border-4 border-stone-700/50 bg-gradient-to-r from-stone-950 from-2% via-blue-900 via-50% to-stone-950 to-2% py-2 px-5 mt-5 hover:transition duration-300 transition-transform transform hover:scale-110'>Ver Postagens</button>
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