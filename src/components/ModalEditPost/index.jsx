import React,{useState,useContext} from 'react'
import { Container } from './styles'
import { customStyles } from '../../styles/CustomStyles/styles'
import Modal from 'react-modal'
import ModalEditPostContent from '../ModalEditPostContent'
import { ApiContext } from '../../providers/api'
import { toast } from 'react-toastify'

const ModalEditPost = ({modalEditPost,handleCloseEditModal,listAllPost}) => {
  const { editPost } = useContext(ApiContext)
  const [newPost,setNewPost] = useState('')

  const handleEditPost = async () => {
    let postId = listAllPost.id
    
    const res = await editPost(newPost,postId)
    if(res.request.status === 401){
      toast.error(`❌${res.response.data.message}`)
      handleCloseEditModal()
    }

    if (res.name !== 'AxiosError') {
      toast.success('✔️ Post editado com sucesso!')
      handleCloseEditModal()
    }
  } 

  return (
    <Container>  
      <Modal
        isOpen={modalEditPost}
        onRequestClose={handleCloseEditModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <ModalEditPostContent handleCloseEditModal={handleCloseEditModal} newPost={newPost} setNewPost={setNewPost} handleEditPost={handleEditPost}/>
      </Modal>
    </Container>
  )
}

export default ModalEditPost
