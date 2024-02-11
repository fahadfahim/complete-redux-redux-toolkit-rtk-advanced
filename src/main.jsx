import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { store } from './app/store.js'
import { Provider } from 'react-redux'
import { fetchUsers } from './features/users/usersSlice.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { fetchPosts } from './features/posts/postsSlice.js'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { apiSlice } from './features/api/apiSlice.js'
import App from './App.jsx'

// store.dispatch(fetchPosts());
// store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById('root')).render(
  // <>
  // before RTK query 
  //   <Provider store={store}>
  //     <Router>
  //       <Routes>
  //         <Route path="/*" element={<App />} />
  //       </Routes>
  //     </Router>
  //   </Provider>
  // </>
  <>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </>
  ,
)
