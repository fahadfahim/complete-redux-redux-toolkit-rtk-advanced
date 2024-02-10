import { useSelector, useDispatch } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError, fetchPosts, selectPostById } from "./postsSlice";
import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  // const dispatch = useDispatch();

  //before normalization adapter for select all posts
  // const posts = useSelector(selectAllPosts);
  //after normalization adapter for select all posts
  const orderedPostIds = useSelector(selectPostIds)
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  // useEffect(() => {
  //   if (postStatus === 'idle') {
  //     dispatch(fetchPosts())
  //   }
  // }, [postStatus, dispatch])

  let content;
  if (postStatus === 'loading') {
    content = <p>"Loading..."</p>;
  } else if (postStatus === 'succeeded') {
    //before normalization we don't need this line because we already doing sort compare function inside the compare function 
    // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <section>
      {content}
    </section>
  )
}
export default PostsList