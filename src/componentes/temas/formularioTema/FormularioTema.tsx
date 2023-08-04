import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Tema from '../../../models/Tema';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { toastAlert } from '../../../utils/toastAlert';

function FormularioTema() {
  const [tema, setTema] = useState<Tema>({} as Tema);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    await buscar(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value
    })

    console.log(JSON.stringify(tema))
  }

  async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar(`/temas`, tema, setTema, {
          headers: {
            'Authorization': token
          }
        })

        toastAlert(`Seu TEMA foi atualizado para ${tema.descricao} com sucesso!`, 'sucesso');
        retornar()

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlert('Opa! O seu token expirou, vai precisar logar de novo', 'info')
          handleLogout()
        } else {
          toastAlert('Oh noes! Parece que ocorreu um erro ao atualizar o Tema', 'erro')
        }

      }

    } else {
      try {
        await cadastrar(`/temas`, tema, setTema, {
          headers: {
            'Authorization': token
          }
        })

        toastAlert(`Eba! O Tema: ${tema.descricao} foi adicionado com sucesso!`, 'sucesso')

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlert('Opa! O seu token expirou, vai precisar logar de novo', 'info')
          handleLogout()
        } else {
          toastAlert('Ih! Parece que ocorreu um erro ao cadastrado o Tema.', 'erro')
        }
      }
    }

    retornar()
  }

  function retornar() {
    navigate("/temas")
  }

  useEffect(() => {
    if (token === '') {
      toastAlert('Heey! Você precisa estar logado!', 'info');
      navigate('/login');
    }
  }, [token]);

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="font-bold text-4xl text-center my-8">
        {id === undefined ? 'Cadastre um Novo Tema' : 'Editar Tema'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTema}>
        <div className="flex flex-col gap-2">
          <label className='font-bold' htmlFor="descricao">Descrição do Tema</label>
          <input
            type="text"
            placeholder="Descrição"
            name='descricao'
            className="border-2 border-slate-700 rounded p-3"
            value={tema.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="text-2xl rounded text-slate-100 bg-sky-700 hover:bg-sky-600 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioTema;