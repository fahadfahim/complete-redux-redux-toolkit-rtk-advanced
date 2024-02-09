import { useState } from 'react'

import Counter from './features/counter/Counter.js'
import PostsList from './features/posts/PostsList.js'
import AddPostForm from './features/posts/AddPostForm.js'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.js'
import SinglePostPage from './features/posts/SinglePostPage.js'
import EditPostForm from './features/posts/EditPostForm.js'
function App() {
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

      </Route>
    </Routes>
  )
}

export default App
