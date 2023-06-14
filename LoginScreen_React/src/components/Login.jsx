import { useState } from 'react'
import logo from '../img/logo.png'
import './Login.css'
import showPasswordIcon from '../img/eye.svg'
import hidePasswordIcon from '../img/eye-off.svg'

export function Login() {
    const [senha, setSenha] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    function handleLogin() {
        if (validateEmail(email)) {
            return alert(`Seu email é: ${email}\nSua senha é: ${senha}`)
        } else {
            setEmailError("Digite um email válido")
        }
    }

    function validateEmail(email) {
        // Implemente aqui sua lógica de validação de email
        // Neste exemplo, apenas verifica se o email possui um @
        return email.includes("@")
    }

    function toggleShowPassword() {
        setShowPassword(!showPassword)
    }

    return (
        <main>
            <section className='login'>
                <div className="content">
                    <div className="logo">
                        <img className='imgLogo' src={logo} alt="logo" />
                        <span>Vertigo</span>
                    </div>

                    <h1>Acesse a plataforma</h1>
                    <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
                    <form>
                        <div className="inputEmail">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                placeholder='Digite seu email'
                                id="email"
                                name='email'
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailError && <p className="error">{emailError}</p>}
                        </div>

                        <div className="inputSenha">
                            <div className="box">
                            <label htmlFor="senha">Senha</label>
                            <span className='esqueceuSenha'>Esqueceu a senha?</span>
                            </div>
                            <div className="passwordContainer">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Digite sua senha'
                                    id="senha"
                                    className='input__box'
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                                <img
                                    className="passwordIcon"
                                    src={showPassword ? hidePasswordIcon : showPasswordIcon}
                                    alt={showPassword ? "Ocultar senha" : "Mostrar senha"}
                                    onClick={toggleShowPassword}
                                />
                            </div>
                        </div>

                        <button className='buttonEntrar' onClick={handleLogin}>
                            Entrar
                        </button>
                    </form>

                    <p>Ainda não tem uma conta?<span className='destaque'> Inscreva-se</span></p>
                </div>
            </section>

            <section className='capa'>
                <div className='imagem'></div>
            </section>
        </main>
    )
}