import React from 'react'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer'
import PostArea from '../../components/PostArea'
import PostCreated from '../../components/PostCreated'

const PostAreaPage = () => {
  return (
    <div>
      <Header/>
      <PostArea/>
      <PostCreated/>
      <Footer/>
    </div>
  )
}
export default PostAreaPage
