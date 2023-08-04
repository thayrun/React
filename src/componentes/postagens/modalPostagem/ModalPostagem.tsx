import FormularioPostagem from '../formularioPostagem/FormularioPostagem';
import './ModalPostagem.css';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

/* 
O arquivo reactjs-popup/dist/index.css é um arquivo de estilo pré-compilado que faz parte da biblioteca reactjs-popup. 
Nesse arquivo, estão definidos todos os estilos necessários para o correto funcionamento dos modais (popups) fornecidos por essa biblioteca.

Quando importamos esse arquivo 'reactjs-popup/dist/index.css';, estamos dizendo ao bundler(Webpack) para incluir esses estilos na compilação final do seu aplicativo. 
Assim, os estilos serão aplicados aos componentes de modal que você utilizar no código, garantindo que eles tenham a aparência e o comportamento esperados.

O que é Bundler mesmo?
Um "bundler" é uma ferramenta de construção de projetos utilizada no desenvolvimento de aplicações web modernas. 
Sua principal função é combinar, processar e otimizar diversos arquivos de código-fonte, como JavaScript, CSS, imagens e outros recursos, em um único ou vários pacotes prontos para uso em um ambiente de produção.
*/





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