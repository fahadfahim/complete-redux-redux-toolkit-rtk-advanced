import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'
const initialState = [
  {
    id: '1', title: 'Learning Redux Toolkit', content: 'i have heard good thisng',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
  },
  {
    id: '2', title: 'Slice', content: 'The more i say slice the more i want pizza',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
  }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    //when we write this postadded function then createslice automatically generates an action createror function with the same name when we export our action we're actually exporting this action creator function that is automatically created 
    postAdded: {
      reducer(state, actions) {
        state.push(actions.payload)
      },
      //prepare callback will formated the data for the action we pass the title and content
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
            }
          }
        }
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find(post => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    }
  }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;