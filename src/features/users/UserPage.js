import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { selectUserById } from './usersSlice'
import { selectAllPosts, selectPostsByUser } from '../posts/postsSlice'

const UserPage = () => {
    const { userId } = useParams()
    const user = useSelector(state => selectUserById(state, Number(userId)))

    console.log('user', user);
    //all of the post by user 
    //useSelector will run every time an action is dispatched before memize call is bellow
    // const postsForUser = useSelector(state => {
    //     const allPosts = selectAllPosts(state)
    //     console.log('all posts', allPosts);
    //     return allPosts.filter(post => post.userId === Number(userId))
    // })

    //using memoization call
    const postsForUser = useSelector(state => selectPostsByUser(state, Number(userId)))

    const postTitles = postsForUser.map(post => (
        <li>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
    ))
    return (
        <section>
            <h2>{user?.name}</h2>
            <ol>{postTitles}</ol>
        </section>
    )
}

export default UserPage