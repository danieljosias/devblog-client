import React from 'react'
import { Container } from './styles'
import { IoMdCloseCircleOutline } from 'react-icons/io'

const ModalEditPostContent = ({handleCloseEditModal, newPost, setNewPost, handleEditPost}) => {
  return (
    <Container>
        <div className='modalHeader'>
          <h2>Editar Post</h2>
          <button onClick={handleCloseEditModal}><IoMdCloseCircleOutline/></button>
        </div>
        
        <form className='modalForm' onSubmit={(e)=> e.preventDefault()}>
          <textarea placeholder='Digite seu novo post..' value={newPost} onChange={(e) => setNewPost(e.target.value)} required/>
          <button onClick={handleEditPost} type='submit'>Editar</button>
        </form>
    </Container>
  )
}

export default ModalEditPostContent
