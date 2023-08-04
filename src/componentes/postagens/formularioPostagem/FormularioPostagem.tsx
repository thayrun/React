import { ChangeEvent, useContext, useEffect, useState } from 'react'; 
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Postagem';
import Tema from '../../../models/Tema';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import { toastAlert } from '../../../utils/toastAlert';

/*
Antes de tudo:
ChangeEvent: É um tipo de evento do React que ocorre quando o valor de um elemento HTML muda, como quando o usuário digita em um campo de entrada (input) 
ou seleciona uma opção de um menu suspenso (select). É usado para capturar mudanças nos campos do formulário.

useContext: É um hook do React que permite que componentes acessem um contexto(no caso, o AuthContext) criado usando o createContext. 
O contexto é uma forma de compartilhar dados entre componentes sem precisar passar props manualmente através da hierarquia de componentes.

useEffect: É um hook do React que permite que componentes executem efeitos colaterais em determinados momentos do ciclo de vida do componente. 
Ele é frequentemente usado para realizar chamadas de API, buscar ou atualizar dados e manipular outras ações que precisam ocorrer após a renderização do componente.

useState: É um hook do React que permite que componentes tenham estado (state). 
O estado é um conceito importante no React que permite que os componentes armazenem e atualizem dados que podem ser re-renderizados quando esse estado muda.

useNavigate: É um hook do react-router-dom que fornece a capacidade de navegar programaticamente para outras páginas em uma aplicação React. 
É uma alternativa para usar o componente Link para navegação.

useParams: É um hook do react-router-dom que permite que um componente acesse os parâmetros presentes na URL. 
Ele é frequentemente usado para obter o valor de parâmetros de rota, como IDs de postagens, IDs de usuários e etc.

AuthContext: É um contexto definido na pasta context no arquitvo AUTHCONTEXT.tsx, que é relacionado à autenticação e gerenciamento de usuário. 
O contexto pode conter informações: como informações do usuário logado, token de autenticação, funções de login, logout e etc.

Postagem e Tema: São modelos de dados(tipos) definidos em outros lugares do código, que representam a estrutura de objetos para postagens e temas.

buscar, atualizar e cadastrar: São funções importadas de um módulo chamado Service, 
que contém as implementações para realizar as operações de busca, atualização e cadastro de postagens e temas. 
Essas funções são responsáveis por fazer as chamadas de API(Application Programming Interface) para interagir com o backend da aplicação.
 */


//Oi, função FormularioPostagem
function FormularioPostagem() {

  let navigate = useNavigate(); /*  
  É utilizado o hook useNavigate do react-router-dom para obter a função navigate, que permite navegar programaticamente para outras rotas da aplicação. 
  É comumente usada para redirecionar o usuário para outra página após alguma ação ou evento.
  Hook super util, alías, qual deles não é útil?
 */


  const { id } = useParams<{ id: string }>(); /*
  É utilizado o hook useParams do react-router-dom para obter os parâmetros presentes na URL. 
  Nesse caso, está sendo obtido o parâmetro chamado ID da rota(Rota que definimos lá no app.tsx), que deve ser do tipo string.
  */


  const { usuario, handleLogout } = useContext(AuthContext); /*
  É utilizado o hook useContext para acessar o contexto AuthContext(tá lá na pasta CONTEXT), que contém informações sobre o usuário logado como o objeto usuario 
  e a função handleLogout para fazer o logout do usuário.
  handleLogout = desloga o usuario, otimo em casos pra expulsar mesmo.
  */


  const token = usuario.token; /*
  É obtido o token do usuário a partir do objeto usuario. O token é usado para realizar autenticações em chamadas de API(Application Programming Interface)
  Vamos considerar o token um CONVITE, se ele não tiver válido, não rola o acesso.
  */

  const [temas, setTemas] = useState<Tema[]>([]); /*
  É criado um estado (useState) chamado temas que será inicializado como um array vazio []. O estado irá armazenar a lista de temas para serem exibidos no formulário.
  [] quadradinho lindo do array. 
  Lembrando que o quadradinho do Tema[] representa o tipo do estado, no caso, indica que o estado TEMAS será um array de objetos do tipo TEMA.

  Já o segundo quadradinho, que aparece logo após o tipo, é o valor inicial do estado TEMAS. 
  Nesse caso, estamos definindo que, quando o componente é renderizado pela primeira vez, o estado TEMAS será um array vazio.
  Isso significa que, inicialmente, não há nenhum tema carregado no formulário de postagem,
  e que ele será preenchido posteriormente por meio da chamada à API ou de alguma outra fonte de dados.
  */

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: '',
  }); /*
  É criado um estado chamado TEMA que será inicializado como um objeto vazio { id: 0, descricao: '' }. O estado irá armazenar o tema selecionado no formulário.
  */



  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: '',
    texto: '',
    data: '',
    tema: null,
    usuario: null,
  }); /*
  Está sendo utilizado o useState para criar um estado chamado POSTAGEM, que será inicializado como um objeto do tipo POSTAGEM.
  A função useState retorna um array com dois elementos. O primeiro elemento, POSTAGEM, representa o valor atual do estado e é o objeto que será atualizado e retornado pelo componente quando houver mudanças. 
  O segundo elemento, setPostagem, é uma função que permite atualizar o valor do estado postagem.
  */


// async(função assíncrona) says: vai ter que esperar hein, dev/usuario 
  async function buscarPostagemPorId(id: string) {         // declaramos o id lá no useParams, na linha 49
    await buscar(`/postagens/${id}`, setPostagem, {       // await says: vamos esperar a resposta do backend pra continuar
      headers: {
        Authorization: token,
      },
    });
  } /*
Essa função é responsável por buscar uma postagem específica com base no id fornecido. Ela utiliza a função buscar para fazer a chamada assíncrona à API do backend e passa o endpoint correspondente à postagem com o id desejado. 
O resultado da chamada é armazenado no estado postagem utilizando a função setPostagem, o que atualiza o componente e reflete as informações da postagem buscada na interface.
  */

  async function buscarTemaPorId(id: string) {             // Aqui faz o mesmo, mas com o TEMA.
    await buscar(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarTemas() {  // Aqui é definida a função 'buscasTema' que é assíncrona
    await buscar('/temas', setTemas, {  /* Nessa linha, a função await indica que a chamada assíncrona deve esperar a resposta do backend antes de prosseguir com a execução das próximas linhas de código. 
                                          A função buscar é a responsável por fazer a chamada à API e receber a resposta.*/
     
     
        headers: {               // Essa parte do código é responsável por definir o cabeçalho da requisição.
        Authorization: token,    // A propriedade Authorization é usada para enviar o token de autorização junto com a chamada à API, permitindo que o backend verifique se o usuário possui a autenticação necessária para acessar o recurso solicitado.
      },
    });
  }

  useEffect(() => {    // Aqui está sendo definido o useEffect, que será executado sempre que o valor do estado token mudar.
    if (token === '') {  // Essa condição verifica se o token está vazio, o que pode indicar que o usuário não está logado. Se o token for vazio, significa que o usuário não está autenticado.
      toastAlert('Você precisa estar logado', 'info'); //Se o usuário não estiver logado, será exibido um alerta(Alert = caixinha de diálogo) para informá-lo de que é necessário estar logado para acessar a página. 
      navigate('/'); // Em seguida, a função navigate é chamada para redirecionar o usuário para a página inicial, indicada pela rota '/'. As rotas estão definidas lá no App.tsx .
    }
  }, [token]); /* 
  Em resumo, o useEffect com [token] como dependência é usado para realizar ações relacionadas ao token sempre que o seu valor é alterado. 
  No caso mencionado, a ação específica é garantir que o usuário esteja autenticado antes de acessar certas partes do aplicativo, se não estiver, redirecioná-lo para a a rota escolhida no navigate.
  */

  useEffect(() => {          //Aqui está sendo definido o useEffect, que será executado sempre que o valor do estado ID mudar.
    buscarTemas();  // Lembrando que buscarTemas() é responsável por fazer chamada assíncrona à API, nosso backend. Essa chamada será feita toda vez que o componente é montado ou quando o valor do id é alterado.

    if (id !== undefined) { /* Essa condição verifica se o id NÃO é undefined(indefinido). 
     O id é obtido a partir do hook useParams, e se ele não for undefined, significa que o componente está sendo utilizado para editar uma postagem existente, pois o id só está presente quando uma postagem específica está sendo acessada para edição.
     */

    buscarPostagemPorId(id); /* 
     Se a condição do if for verdadeira (se o id NÃO é undefined), então a função buscarPostagemPorId(id) é chamada. Essa função é responsável por fazer uma chamada assíncrona à API para buscar os detalhes da postagem que corresponde ao id fornecido. 
     Assim, a postagem que está sendo editada é buscada e os detalhes são atualizados no estado postagem.
    */
      console.log(tema);/* 
      Agora é feito um console.log(tema). 
      Nesse ponto, o valor do estado tema não será o valor atualizado após a chamada assíncrona de buscarPostagemPorId(id), pois o console.log é executado antes de o estado ser atualizado. 
      Então, o valor impresso no console é o valor anterior do estado tema.
      */

    }
  }, [id]);/* 
  Estamos passando [id] como a lista de dependências. Isso significa que o código dentro do useEffect será acionado sempre que o valor do estado id mudar. 
  Quando o valor do id mudar, a função buscarTemas() será chamada, e se o id não for undefined, a função buscarPostagemPorId(id) também será chamada, seguida por um console.log(tema).
  */

  useEffect(() => { //  Aqui está sendo definido o useEffect novamente, que será executado sempre que o valor do estado tema.
    setPostagem({ // Aqui estamos utilizando a função setPostagem para atualizar o estado postagem.

      ...postagem, /* É uma sintaxe chamada "spread operator" ou "operador de propagação" em JavaScript. Esse operador é utilizado para copiar as propriedades de um objeto existente para um novo objeto de forma mais concisa.
        Ela está copiando todas as propriedades do objeto postagem atual para um novo objeto. Em seguida, a propriedade tema do novo objeto é atualizada com o valor do estado tema.

        Essa abordagem é usada para atualizar o estado postagem mantendo as propriedades existentes inalteradas, exceto pela propriedade tema, que é atualizada com o valor mais recente de tema. 
        Dessa forma, o estado postagem é atualizado para refletir o novo valor de tema, sem afetar as outras propriedades do objeto.
      */
      tema: tema,
    });
  }, [tema]);


  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) { // A função atualizarEstado recebe um evento ChangeEvent como argumento. Esse evento é gerado sempre que o valor de um elemento input é alterado, como quando o usuário digita texto em um campo de formulário.
    setPostagem({  // Aqui, o estado postagem é atualizado usando a função setPostagem
      ...postagem, // Está sendo utilizado o spread operator para copiar todas as propriedades existentes do objeto postagem atual para um novo objeto.
     
      [e.target.name]: e.target.value, /*
      Essa é uma notação de propriedade computada em JavaScript. e.target.name é o nome do atributo name do elemento input, 
      que é usado para identificar a propriedade do estado postagem que deve ser atualizada. e.target.value é o valor digitado ou selecionado pelo usuário no elemento input.

        Por exemplo: Se tivermos um elemento input com o atributo name definido como titulo, quando o usuário digitar um título, 
        o trecho [e.target.name]: e.target.value será traduzido para { titulo: 'valorDigitado' }, atualizando a propriedade titulo do estado postagem com o valor digitado pelo usuário.
      */

      tema: tema,
      usuario: usuario, //Essas duas linhas atualizam as propriedades tema e usuario do estado postagem. Aqui, o valor de tema e usuario é proveniente dos estados tema e usuario, respectivamente.
    });
  }

  function retornar() {           // Aqui a função retornar() é responsável por redirecionar o usuário para a página de listagem de postagens quando acionada.
    navigate('/postagens');     
  }

  async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {

    e.preventDefault(); /* Aqui previne o comportamento padrão do evento de submissão do formulário, evitando que a página seja recarregada.
    Ah, mas o que é isso mesmo e o que ele faz exatamente?
    Ele é um método utilizado em eventos de JavaScript para evitar o comportamento padrão associado a esse evento. 
    Em essência, quando um evento é acionado em um elemento HTML, ele geralmente executa uma ação específica padrão, como seguir um link, enviar um formulário ou recarregar a página. 
    No entanto, às vezes, desejamos alterar esse comportamento padrão e realizar ações personalizadas.
    É ai que o e.preventDefault() entra em jogo. Quando chamamos esse método em um evento, ele impede que o comportamento padrão do evento ocorra. 
    */

    console.log({ postagem });/*
    O console está sendo usado para exibir o valor do objeto postagem no console. 
    O { postagem } é uma sintaxe de desestruturação de objeto em JavaScript que cria um novo objeto contendo a propriedade postagem. Isso é útil para visualizar o objeto completo no console.
    */

    if (id != undefined) {
      try {
        await atualizar(`/postagens`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });
        toastAlert('Postagem atualizada com sucesso', 'sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {  // Aqui temos a variável error que representa um OBJETO, e aí o toString() converte o objeto pra STRING, includes() é utilizado para verificar se a string resultante contém uma substring específica, que, no caso, é "403".
          toastAlert('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlert('Erro ao atualizar a Postagem', 'erro');
        }
      }
    } else {
      try {
        await cadastrar(`/postagens`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });

        toastAlert('Postagem cadastrada com sucesso', 'sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlert('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlert('Erro ao cadastrar a Postagem', 'erro');
        }
      }
    }
  }

  const carregandoTema = tema.descricao === '';
  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Postagem' : 'Cadastrar Postagem'}</h1>

      <form onSubmit={gerarNovaPostagem} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Titulo da postagem</label>
          <input
            value={postagem.titulo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Titulo"
            name="titulo"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Texto da postagem</label>
          <input
            value={postagem.texto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Texto"
            name="texto"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Tema da postagem</p>
          <select name="tema" id="tema" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarTemaPorId(e.currentTarget.value)}>
            <option value="" selected disabled>Selecione um tema</option>
            {temas.map((tema) => (
              <>
                <option value={tema.id} >{tema.descricao}</option>
              </>
            ))}
          </select>
        </div>
        <button disabled={carregandoTema} type='submit' className='rounded disabled:bg-red-200 bg-blue-400 hover:bg-blue-800 text-white font-bold w-1/2 mx-auto block py-2'>
          {carregandoTema ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioPostagem;