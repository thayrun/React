import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const {isLoading} = useContext(AuthContext) 

  useEffect(() => {
    if (usuario.token !== "") {
        navigate('/home')
    }
}, [usuario])

function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
  setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
  })
}

function login(e: ChangeEvent<HTMLFormElement>) {
  e.preventDefault()
  handleLogin(usuarioLogin)
}

  return (
    <>
      <div className="flex justify-center items-center h-screen place-items-center font-bold ">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4 container-login" onSubmit={login}>
          <h2 className="font-handjet text-7xl animated-text-color bg-clip-text text-transparent">Entrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 p-2 pr-3 shadow-sm focus:outline-none focus:border-cyan-400 focus:ring-emerald-300 focus:ring-1 sm:text-sm"
              value={usuarioLogin.usuario} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 p-2 pr-3 shadow-sm focus:outline-none focus:border-emerald-400 focus:ring-sky-300 focus:ring-1 sm:text-sm"
              value={usuarioLogin.senha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <button  type='submit' className="rounded bg-rainbow hover:transition duration-300 transition-transform transform hover:scale-110 text-white w-1/2 py-2 flex justify-center">
           {isLoading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          /> :
            <span>Entrar</span>
            
            }
          </button>

          <hr className="border-slate-800 w-full" />

          <p>
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro" className="text-blue-700 hover:underline">
              Cadastre-se
            </Link>
          
          </p>
        </form>
        <div className="fundoLogin hidden lg:block"></div>
      </div>
    </>
  );
}

export default Login;