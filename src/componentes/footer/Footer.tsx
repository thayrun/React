import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {


  const { usuario, handleLogout } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()


  if (usuario.token !== '') {
    footerComponent = (

      <div className="bg-gradient-to-r from-blue-800 from-2% via-stone-950 via-50% to-blue-800 to-2% text-white flex justify-center py-4 border-t-4 border-cyan-500">
        <div className="container flex flex-col items-center py-4">
          <p className='text-xl font-bold'>Blog Pessoal - Generation | Copyright: &copy;ThayronNogueira {data}</p>
          <p className='text-lg'>Acesse minhas redes sociais</p>
          <div className='flex gap-3 mt-4 '>
            <div className='text-cyan-300 hover:text-cyan-900 transform hover:scale-110'>
              <LinkedinLogo size={45} weight='bold' />
            </div>
            <div className='text-cyan-300 hover:text-cyan-900 transform hover:scale-110'>
              <InstagramLogo size={45} weight='bold' />
            </div>
            <div className='text-cyan-300 hover:text-cyan-900 transform hover:scale-110'>
              <FacebookLogo size={45} weight='bold' />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer