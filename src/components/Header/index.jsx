import React from 'react'
import { Container } from '../Header/styles'
import { MdOutlineLogout } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

const Header = () => {
  const history = useHistory()

  const handleLogout = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('email')

    history.push('/signin')
    toast.success('Usuário deslogado com sucesso!')
  }

  return (
    <Container>
        <h1>DevBlog</h1>
        <div className='iconContainer'>
          <MdOutlineLogout className='iconLogout'/>
          <span onClick={handleLogout}>Sair</span>
        </div>
    </Container>
  )
}

export default Header
