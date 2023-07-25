import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center border-t-4 border-sky-500 bg-black text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Blog Pessoal - Generation | Copyright:  &copy;ThayronNogueira</p>
            <p className='text-lg'>Acesse minhas redes sociais</p>
            <div className='flex gap-3 mt-4'>
              <LinkedinLogo size={40} weight='bold' color='cyan' />
              <InstagramLogo size={40} weight='bold' color='cyan' />
              <FacebookLogo size={40} weight='bold' color='cyan' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer