import React,{useContext} from 'react'
import { Container } from './styles'
import { ApiContext } from '../../providers/api'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import Blog from '../../assets/blog.jpg'

const SignIn = () => {
  const { createLogin } = useContext(ApiContext)

  const history = useHistory()

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().min(9,'Senha de 9 dígitos').required("Senha obrigatória")
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(formSchema)
  });

  const onSubmitFunction = async (data) =>{
    const res = await createLogin(data)

    const token = res?.data
    localStorage.setItem('token',JSON.stringify(token))

    if(res?.name !== 'AxiosError'){
      localStorage.setItem('email',data.email)
      history.push('/postarea')
      toast.success('✔️ Usuário logado com sucesso!')
    }else{
      throw new Error('❌Email or password invalid')
    } 
    
  }

  return (
    <Container>
      <div className='blog'>
        <img src={Blog} alt='foto de um blog'/>
      </div>
      
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h1>Sign In</h1>
    
        {errors.email?.message}
        <div>
          <label>Email:</label>
          <input placeholder='Digite seu email...' {...register('email')}/>
        </div>

        {errors.password?.message}
        <div>
          <label>Senha:</label>
          <input placeholder='Digite sua senha...' type='password' {...register('password')}/>
        </div>

        <button type='submit'>Entrar</button>

        <div>
          <p><span>Não possui conta?</span><Link to='/signup' className='link'>Cadastre-se</Link></p>
        </div>
      </form>
    </Container>
  )
}

export default SignIn
