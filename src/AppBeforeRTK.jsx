import { useState } from 'react'

import Counter from './features/counter/Counter.js'
import PostsList from './features/posts/PostsList.js'
import AddPostForm from './features/posts/AddPostForm.js'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.js'
import SinglePostPage from './features/posts/SinglePostPage.js'
import EditPostForm from './features/posts/EditPostForm.js'
import UsersList from './features/users/UsersList.js'
import UserPage from './features/users/UserPage.js'
function AppBeforeRTK() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="*" element={<Layout />}>

        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path='user'>
          <Route index element={<UsersList />} />
          <Route path=':userId' element={<UserPage />} />
        </Route>

        {/* Catch all - replace with 404 component */}
        <Route path='*' element={<Navigate to='/' replace />} />

      </Route>
    </Routes>
  )
}

export default AppBeforeRTK
