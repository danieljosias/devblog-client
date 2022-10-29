import React,{useState} from 'react'
import { Container } from './styles'
import ModalEditPost from '../ModalEditPost'
import ModalDeletePost from '../ModalDeletePost'

const PostCreated = ({showPost,listAllPost,post,name,avatar}) => {
    const [modalEditPost, setEditPost] = useState()
    const [modalDeletePost, setDeletePost] = useState()

    const handleCloseEditModal = () => {
        setEditPost(false)
    }

    const handleOpenEditModal = () => {
        setEditPost(true)
    }

    const handleCloseDeleteModal = () => {
        setDeletePost(false)
    }

    const handleOpenDeleteModal = () => {
        setDeletePost(true)
    }

    return(
        <Container showPost={showPost}>
            <ModalEditPost modalEditPost={modalEditPost} handleCloseEditModal={handleCloseEditModal} listAllPost={listAllPost}/>
            <ModalDeletePost modalDeletePost={modalDeletePost} handleCloseDeleteModal={handleCloseDeleteModal} listAllPost={listAllPost}/>

            <div className='postCreatedContainer'> 
                <div className='postCreatedHeader'>
                    <img src={avatar} alt="avatar" />
                    <span>{name}</span>
                </div>
                
                <div className='postCreated'>
                    <p>{post}</p>
                </div>

                <div className='postCreatedButtons'>
                    <button className='red' onClick={handleOpenDeleteModal}>Deletar</button>
                    <button className='green' onClick={handleOpenEditModal}>Editar</button>
                </div>
            </div>
        </Container>
    )
}

export default PostCreated