import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'


function Navbar() {
  let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    let navbarComponent

    if(usuario.token !== ""){
      navbarComponent = (
        <div className='w-full bg-gradient-to-r from-stone-950 from-2% via-blue-800 via-80% to-stone-950 to-100% text-white flex justify-center py-4 border-b-2 border-cyan-500'>
        <div className="container flex justify-between text-lg py-2">
        <Link to='/home' className='font-handjet text-4xl font-bold uppercase py-2'>Blog Pessoal</Link>

          <div className='flex gap-5 py-3 font-handjet text-2xl px-5'>
          <Link to='/postagens' className='px-7 py-1 hover:text-sky-500 active:bg-zinc-800 focus:outline-none focus:ring focus:ring-blue-300 font-bold uppercase py-2 hover:text-cyan-500 transition duration-300 transition-transform transform hover:scale-105'>Postagens</Link>
          <Link to='/temas' className='px-7 py-1 hover:text-sky-500 active:bg-zinc-800 focus:outline-none focus:ring focus:ring-blue-300 font-bold uppercase py-2 hover:text-cyan-500 transition duration-300 transition-transform transform hover:scale-105'>Temas</Link>
          <Link to='/cadastroTema' className='px-7 py-1 hover:text-sky-500 active:bg-zinc-800 focus:outline-none focus:ring focus:ring-blue-300 font-bold uppercase py-2 hover:text-cyan-500 transition duration-300 transition-transform transform hover:scale-105'>Cadastrar tema</Link>
            <Link to='/perfil' className='px-7 py-1 hover:text-sky-500 active:bg-zinc-800 focus:outline-none focus:ring focus:ring-blue-300 font-bold uppercase py-2 hover:text-cyan-500 transition duration-300 transition-transform transform hover:scale-105'>Perfil</Link>
            <Link to='' onClick={logout} className='px-7 py-1 hover:text-red-500 active:bg-zinc-800 focus:outline-none focus:ring focus:ring-blue-300 font-bold uppercase py-2 hover:text-red-500 transition duration-300 transition-transform transform hover:scale-105'>Sair</Link>
           
          </div>
        </div>
      </div>
      )
    }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar