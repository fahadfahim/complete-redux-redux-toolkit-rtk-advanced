import React from 'react'
import { useSelector } from 'react-redux'
//to avoid state.posts we need to create look in the postslice
import { selectAllPosts } from './postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButton from './ReactionButton'
const PostsList = () => {
  const posts = useSelector(selectAllPosts)
  //showing last posts at the beginning
  //localcompare will return a negative one or a positive one or a zero based on one is greater than one the other
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderPosts = orderedPosts.map(post => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 100)}</p>
      <div className='postCredit'>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButton post={post} />
      </div>
    </article>
  ))

  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  )
}

export default PostsList