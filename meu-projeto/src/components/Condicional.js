import { useState } from "react"
function Condicional()
{

    const[email, setEmail] = useState()
    const[userEmail, setUserEmail]=useState()

    function enviarEmail(e)
    {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail()
    {
        setUserEmail('')
    }


    return (
        <div>
            <h2>Cadastre o seu email:</h2>
            <form>
                <input type="email" placeholder="digite o seu email" onChange={(e)=> setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar email</button>
            </form>
            {userEmail &&(
                <div>a
                    <p>O emil do usuário é {userEmail}</p>
                    <button onClick={limparEmail}>Limpar Email</button>
                </div>
            )}
        </div>
    )
}
export default Condicional