
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { CyclesContext } from '../App'
import actionFigure from '../assets/logotipo.svg'
import { LoginContainer } from '../styled/Login'

const CreateGlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-family: 'Montserrat';
    }
    button{
        font-family: 'Montserrat';
    }
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }
`


export function Login() {

   
    
    const { setUser } = useContext(CyclesContext)
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [acesso, setAcesso] = useState('sign')
    

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        const user = {
            name,
            email,
            password
        }

        setUser(user)
       
        console.log(user)
        
        navigate('/')
        
    }

    return (
        <LoginContainer theme={acesso}>
            <CreateGlobalStyled />
            


            <div className='content'>
                <div className='sign_in'>
                    <div className='cardLogin'>
                        <h1>Sign in</h1>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Digite seu Nome'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Digite seu email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder='Digite sua senha'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password} 
                            />
                                <button type='submit'>Entre</button>
                        </form>
                    </div>
                </div>
                <div className='logo'>
                    <img src={actionFigure} alt="" />
                    <button className='btnSignIn' onClick={() => setAcesso((prev) => prev = 'sign')}>Cadastra-se Aqui</button>
                    <button className='btnLogin' onClick={() => setAcesso((prev) => prev = 'login')}>Login Aqui</button>

                </div>
                <div className='login'>
                    <div className='cardLogin'>
                        <h1>Login</h1>
                        <form >
                            <input
                                type="emailLogin"
                                name="emailLogin"
                                id="emailLogin"
                                placeholder='Digite seu email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <input
                                type="passwordLogin"
                                name="passwordLogin"
                                id="passwordLogin"
                                placeholder='Digite sua senha'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password} 
                            />
                                <button type='submit'>Entre</button>   
                        </form>
                    </div>
                </div>
            </div>
        </LoginContainer>
    )
}