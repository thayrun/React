import './Home.css'
import homeLogo from '../../Home.jpg'

const Home = () => {
  return (
    <>
    <h1 className='title'>Home</h1>

      <img src={homeLogo} className='img' alt="Imagem Tela Inicial" />

    </>
  )
}

export default Home