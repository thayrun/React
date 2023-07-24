import { useState } from "react";





const HomeHookTwo = () => {
    const [loggedIn, setLoggedIn] = useState(false);




    return (
        <div>
            {loggedIn ? (
                <h1>Bem-vindo de volta!</h1>
            ) : (
                <button onClick={() => setLoggedIn(true)}>Entrar</button>
            )
            }

        </div>
    )
}


export default HomeHookTwo;