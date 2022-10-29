import React from 'react'
import { Container } from './styles'
import { useHistory } from 'react-router-dom'

const Welcome = () => {
  const history = useHistory()

  const handleRegister = () =>{
    history.push('/signup')
  }
  
  return (
    <Container>
      <div className='left'>
          <h1>DevBlog</h1>
      </div>
      
      <div className='right'>
        <p>O DevBlog é direcionado para o desenvolvedor de sistemas. Aqui você pode compartilhar os desafios e os aprendizados do seu atual projeto. Pode criar, editar e deletar os seus posts. É o lugar ideal para mostrar para o mundo as suas realizações como dev! Vamos lá?</p>
        <button onClick={handleRegister}>Cadastre-se</button>
      </div>
    </Container>
  )
}

export default Welcome
