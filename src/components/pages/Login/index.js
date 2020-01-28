// Import Modules
import React from 'react'

// Import Components
import Input from '../../presentacional/Input'
import Button from '../../presentacional/Button'

// Import Styles
import './styles.scss'

const Login = ({
  login,
  setEmail,
  setNickname
}) => {
  console.log(login)
  return (
    <div className='login-page'>
      <div className='login-container'>
        <Input
          placeholder='Escribe tu email'
          label='Dirección de correo electrónico'
          errorText='Dirección de correo invalida'
          isError={login.isEmailValid}
          content={login.email}
          setContent={(ev) => setEmail(ev.target.value)}
        />
        <Input
          placeholder='Escribe tu Nickname'
          label='Nombre de usuario'
          errorText='Nombre invalido'
          isError={login.isNickNameValid}
          content={login.nickname}
          setContent={(ev) => setNickname(ev.target.value)}
        />
        <div className='button-container'>
          <Button>Entrar</Button>
        </div>
      </div>
    </div>
  )
}

export default Login
