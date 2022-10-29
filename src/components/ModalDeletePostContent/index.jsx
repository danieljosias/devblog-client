import React from 'react'
import { Container } from './styles'
import { IoMdCloseCircleOutline } from 'react-icons/io'

const ModalDeletePostContent = ({handleCloseDeleteModal,handleDeletePost}) => {
  return (
    <Container>
        <div className='modalHeader'>
          <h2>Deletar Post</h2>
          <button onClick={handleCloseDeleteModal}><IoMdCloseCircleOutline/></button>
        </div>

        <p>Tem certeza que quer deletar o seu post?</p>

        <form className='modalForm' onSubmit={(e)=> e.preventDefault()}>
          <button className='green' onClick={handleDeletePost} type='submit'>Sim</button>
          <button className='red' onClick={handleCloseDeleteModal} type='submit'>Não</button>
        </form>
    </Container>
  )
}

export default ModalDeletePostContent
