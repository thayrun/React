import { Link } from 'react-router-dom'  // O 'Link' é um componente usado pra criar links na aplicação React.
import Postagem from '../../../models/Postagem' // Nossa interface Postagem.ts, é usada para definir como os dados são organizados e utilizados dentro da aplicação.


/* A declaração dessa interface indica que a função CardPostagem aceitará um objeto com o nome POST como propriedade, 
 e esse objeto deve seguir o formato da interface Postagem.*/
interface CardPostagemProps {
  post: Postagem
 /* ^^^^^^^
  Nesta parte da interface, estamos declarando que a função CardPostagem espera receber um objeto com uma propriedade chamada POST, e essa propriedade deve ter o tipo Postagem. 
  Isso significa que o objeto passado para CardPostagem deve possuir uma propriedade POST que contenha uma instância do tipo POSTAGEM. 
                                           
 > Exemplo:
 Se a interface POSTAGEM(.ts/lá na model) tiver propriedades como titulo, texto, data, entre outros,
 Poderemos acessar essas informações dentro da função CardPostagem através de props.post.titulo, props.post.texto, props.post.data e assim vai.
 */

}


/* A função abaixo (CardPostagem), espera receber uma propriedade POST, que segue formato de interface, nosso querido CardPostagemProps.
   Dessa forma, posso acessar diretamente as propriedades do objeto POST dentro dessa função. */
function CardPostagem({ post }: CardPostagemProps) { 


  // O componente retorna uma div que representa o cartão(CARD) da postagem com algumas classes de estilos definidas.

  return (

   /* 
   Enquanto isso dentro do Card:
   A PRIMEIRA div contém informações do autor(usuário) da postagem e a SEGUNDA div contém informações específicas da postagem.

   Ainda na PRIMEIRA div, temos um cabeçalho com a imagem do autor (post.usuario?.foto) e o nome do autor (post.usuario?.nome).
   
   Na SEGUNDA div, temos o título da postagem (post.titulo), o texto da postagem (post.texto), o tema da postagem (post.tema?.descricao) e a data formatada da postagem (post.data).

   Além disso, o componente possui dois botões que são representados por elementos Link do react-router-dom. 
   Esses botões são links que levam o usuário para as páginas de edição e exclusão da postagem, onde o ID da postagem é passado como parte da URL.


      Devo lembrar:
    O que é o React-Router-Dom mesmo?
    É uma biblioteca que permite adicionar o roteamento (navegação) em aplicações web construídas com React. 
    Ele é uma extensão do react-router, uma biblioteca geral de roteamento para o React. 
    O react-router-dom foi projetado especificamente para aplicações web que utilizam o DOM(Document Object Model) como ambiente de execução.
   */
     


    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
         <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      </div>

            {/* PRIMEIRA Div citada lá em cima, na linha 37 */}
        <div className="flex w-full py-2 px-6 bg-zinc-800 text-white font-bold text-2xl px-4 items-center gap-4">
          <img src={post.usuario?.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase '>{post.usuario?.nome}</h3>
        </div>


            {/* SEGUNDA Div citada lá em cima, na linha 39 */}
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
          <p>{post.texto}</p>
          <p>Tema: {post.tema?.descricao}</p>
          <p>Data: {new Intl.DateTimeFormat(undefined, {
            dateStyle: 'full',
            timeStyle: 'medium',
          }).format(new Date(post.data))}</p>
        </div>
      </div>


                  {/* Botões(button) citados acima, nas linhas 41~42 */}
      <div className="flex">
        <Link to={`/editarPostagem/${post.id}`} className='w-full text-slate-100 bg-sky-700 hover:bg-sky-600 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${post.id}`} className='text-slate-100 bg-red-700 hover:bg-red-500 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
                  {/* FIM */}
    </div>
  )
}

export default CardPostagem;
// A declaração acima(CardPostagem) é usada para exportar o componente CardPostagem para que ele possa ser utilizado em outros arquivos do projeto.