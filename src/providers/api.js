import { createContext } from "react";
import api from '../services'
export const ApiContext = createContext([])

export const ApiProvider = ({children}) =>{
    let token = localStorage.getItem('token')
   
    async function createUser(data){
        try {
            const res = await api.post('/users',data);
            return res;
        } catch (err) {
            return err
        }
    }

    async function listAllUsers(){
        try {
            const res = await api.get('/users');
            return res;
        } catch (err) {
            return err
        }
    }

    async function createLogin(data){
        try {
            const res = await api.post('/login',data);
            return res;
        } catch (err) {
            return err
        }
    }

    async function createPost(userId,post){
        try {
            const res = await api.post('/posts',{post,userId,token});
            return res;
        } catch (err) {
            return err
        }
    }

    async function listPosts(){
        try {
            const res = await api.get('/posts');
            return res;
        } catch (err) {
            return err;
        }
    }

    async function editPost(newPost,postId){
        try {
            const res = await api.patch(`/posts/${postId}`,{newPost,token});
            return res;
        } catch (err) {
            return err;
        }
    }

    async function deletePost(postId){
        try {
            const res = await api.delete(`/posts/${postId}`);
            return res;
        } catch (err) {
            return err;
        }
    }

    return(
        <ApiContext.Provider
            value={{createUser, listAllUsers, createLogin, createPost, listPosts, editPost, deletePost}}
        >
            {children}
        </ApiContext.Provider>
    )

}