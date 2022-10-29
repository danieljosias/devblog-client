import React, { useContext } from 'react'
import { ApiContext } from '../../providers/api'
import { Container } from './styles'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import Blog from '../../assets/blog.jpg'
import { toast } from 'react-toastify'

const SignUp = () => {
  const history = useHistory()

  const { createUser } = useContext(ApiContext)

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    avatar: yup.string().required("Avatar obrigatório"),
    password: yup.string().min(8,'Senha de 9 dígitos').required("Senha obrigatória")
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(formSchema)
  });

  const onSubmitFunction = async (data) =>{
    const res = await createUser(data)
  
    if(res?.name !== 'AxiosError'){
      history.push('/signin')
      toast('✔️ Usuário criado com sucesso!')
    }
  }
 
  return (
    <Container>
      <div className='blog'>
        <img src={Blog} alt='foto de um blog'/>
      </div>

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h1>Sign Up</h1>
        {errors.name?.message}
        <div>
          <label>Nome:</label>
          <input placeholder='Digite seu nome...' {...register('name')}/>
        </div>

        {errors.email?.message}
        <div>
          <label>Email:</label>
          <input placeholder='Digite seu email...' {...register('email')}/>
        </div>

        {errors.avatar?.message}
        <div>
          <label>Avatar:</label>
          <input placeholder='Digite sua url...' {...register('avatar')}/>
        </div>

        {errors.password?.message}
        <div>
          <label>Senha:</label>
          <input placeholder='Digite sua senha...' type='password' {...register('password')}/>
        </div>

        <button type='submit'>Cadastre-se</button>

        <div>
          <p><span>Já possui conta?</span><Link to='/signin' className='link'>Acessar</Link></p>
        </div>
      </form>
    </Container>
  )
}

export default SignUp
