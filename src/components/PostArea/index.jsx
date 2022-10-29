import React,{useState,useContext, useEffect} from 'react'
import { ApiContext } from '../../providers/api'
import { Container} from './styles'
import { BiSend } from 'react-icons/bi'
import { toast } from 'react-toastify'
import PostCreated from '../PostCreated'

const PostArea = () =>{
    const [ posts, setPosts ] = useState()
    const [ listAllPosts, setListAllPosts ] = useState()
    const [showPost, setShowPost] = useState(true)
    const [avatar,setAvatar] = useState()
    const [userId,setUserId] = useState()

    const { createPost, listPosts, listAllUsers } = useContext(ApiContext)

    const handleCreatePost = async () => {
        const res = await createPost(userId,posts)

        if(posts === undefined){
            toast.error('❌ Digite o seu post!')
        }else if(res.name !== 'AxiosError'){
            toast.success('✔️ Post criado com sucesso!')
            setPosts('')
            setShowPost(true)
        }
    }

    useEffect(()=>{
        const postAllUsers = async () =>{
            const result = await listPosts()
            if(result.name !== 'AxiosError'){
                setListAllPosts(result.data.posts)
            }
        }
        setTimeout(postAllUsers, 1000*10)
    },[listAllPosts])

    useEffect(()=>{
        const avatarAllUsers = async () =>{
        const res = await listAllUsers()
        const users = res.data.users
        const email = localStorage.getItem('email')
        
        const atualUser  = users.find(user => user.email === email)
        setAvatar(atualUser.avatar)
        setUserId(atualUser.id)
        }
        avatarAllUsers()
    },[listAllPosts])

    return(
        <>
            <Container>
                <form className='post' onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <img src={avatar} alt="avatar" />
                        <input type="text" placeholder='No que você está pensando?' value={posts || ''} onChange={(e) => setPosts(e.target.value)} />
                    </div>
                    <div className='iconContainer'>
                        <button type='submit' onClick={handleCreatePost}><BiSend className='icon' /></button>
                    </div>
                </form>

            </Container>

            {listAllPosts?.map((listAllPost) => {
                return <PostCreated key={listAllPost.id} showPost={showPost} setShowPost={setShowPost} listAllPost={listAllPost} post={listAllPost.post} name={listAllPost.user.name} avatar={listAllPost.user.avatar}/>
            })}
        </>
    )
}
export default PostArea