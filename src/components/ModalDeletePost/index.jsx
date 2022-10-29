import React,{useContext} from 'react'
import { Container } from './styles'
import { customStyles } from '../../styles/CustomStyles/styles'
import Modal from 'react-modal'
import ModalDeletePostContent from '../ModalDeletePostContent'
import { ApiContext } from '../../providers/api'
import { toast } from 'react-toastify'

const ModalDeletePost = ({modalDeletePost,handleCloseDeleteModal,listAllPost}) => {
  const { deletePost } = useContext(ApiContext)

  const handleDeletePost = async () =>{
    const postId = listAllPost?.id
    const res = await deletePost(postId)

    if(res.request.status === 401){
      toast.error(`❌${res.response.data.message}`)
      handleCloseDeleteModal()
    }
    else if(res.name !== 'AxiosError'){
      toast.success('✔️ Post deletado com sucesso!')
      handleCloseDeleteModal()
    }
  }

  return (
    <Container>  
      <Modal
        isOpen={modalDeletePost}
        onRequestClose={handleCloseDeleteModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <ModalDeletePostContent handleCloseDeleteModal={handleCloseDeleteModal} handleDeletePost={handleDeletePost}/>
      </Modal>
    </Container>
  )
}

export default ModalDeletePost
