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
  

  return (
    <>
     <div className='w-full border-b-4 border-sky-500 bg-zinc-950 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

            <div className='flex gap-10 px-5 py-1 bg-black'>
            <div className='px-5 py-1 hover:text-sky-500 active:bg-zinc-800 focus:outline-none focus:ring focus:ring-blue-300 transition-transform transform hover:scale-105'>Postagens</div>
            <Link to='/temas' className='px-5 py-1 hover:text-sky-500 active:bg-zinc-800 focus:outline-none focus:ring focus:ring-blue-300 transition-transform transform hover:scale-110'>Temas</Link>
            <Link to='/cadastroTema' className='px-5 py-1 hover:text-sky-500 active:bg-zinc-800 focus:outline-none focus:ring focus:ring-blue-300 transition-transform transform hover:scale-105'>Cadastrar tema</Link>
              <div className='px-5 py-1 hover:text-sky-500 active:bg-zinc-800 focus:outline-none focus:ring focus:ring-blue-300 transition-transform transform hover:scale-110'>Perfil</div>
              <Link to='' onClick={logout} className='py-1 hover:text-red-500 transition-transform transform hover:scale-105'>Sair</Link>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar