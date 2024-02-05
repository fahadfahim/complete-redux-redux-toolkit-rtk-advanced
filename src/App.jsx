import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './features/counter/Counter.js'
import PostsList from './features/posts/PostsList.js'
import AddPostForm from './features/posts/AddPostForm.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='App'>
      {/* <Counter /> */}
      <AddPostForm />
      <PostsList />
    </main>
  )
}

export default App
