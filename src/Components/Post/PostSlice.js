import {createSlice} from '@reduxjs/toolkit'
import {faker} from '@faker-js/faker'
import owner from '../../assets/profile/owner.jpg'

const initialState = {
  posts: [
    {
      id: 1,
      title: "My first post",
      author: faker.name.fullName(),
      image: faker.internet.avatar(),
      jobTitle: 'Software Developer',
      content: faker.lorem.lines(),
      postImage: faker.image.fashion(),
      time: '3h',
      likes: 10,
      isLiked: false,
      comments: [
        {
          id: 1,
          author: faker.name.fullName(),
          authorImage: faker.internet.avatar(),
          jobTitle: faker.name.jobTitle(),
          text: faker.lorem.sentence()
        }
      ]
    },
    {
      id: 2,
      title: 'Second Post',
      jobTitle: 'Software Developer',
      author: faker.name.fullName(),
      image: faker.image.people(),
      content: faker.lorem.lines(),
      postImage: faker.image.imageUrl(),
      time: '1h',
      likes: 5,
      isLiked: false,
      comments: []
    },
    {
      id: 3,
      title: "My third post",
      jobTitle: 'Software Developer',
      author: faker.name.fullName(),
      image: faker.internet.avatar(),
      content: faker.lorem.lines(),
      postImage: faker.image.people(),
      time: '5h',
      likes: 15,
      isLiked: false,
      comments: [
        {
          id: 1,
          author: faker.name.fullName(),
          authorImage: faker.internet.avatar(),
          jobTitle: faker.name.jobTitle(),
          text: faker.lorem.sentence()
        }
      ]
    }
  ]
}

// Function to generate keys with random values for our comments
const generateNewComment = (commentText) => ({
  id: Math.floor(Math.random() * 1000) + 1,
  author: 'John Maxwell',
  authorImage: owner,
  jobTitle: 'Software Developer',
  text: commentText
});

// This code defines a Redux slice named "Post" with two reducers - "likes" and "addComment".
// The "likes" reducer takes the ID of a post as its payload and toggles the "isLiked" property of the corresponding post in the state.
// The "addComment" reducer takes the post ID and comment text as its payload. It generates a new comment object using the "generateNewComment" function, finds the index of the post with the given ID in the "state.posts" array, and then creates a new post object with the updated comments array. The new post object is then used to create a new array of posts, which is returned along with the updated state.
const postSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {
    likes: (state, action) => {
      const postId = parseInt(action.payload);
      const post = state.posts.find((p) => p.id === postId);
      if (post.isLiked) {
        post.isLiked = false;
      } else {
        post.isLiked = true;
      }
    },

    addComment: (state, action) => {
      // Parse the post ID from the action payload
      const {postId, text} = action.payload
      const newComment = generateNewComment(text);
      console.log(action)
      const postIndex = state.posts.findIndex((p) => p.id === postId);
      
      if (postIndex !== -1) {
        const post = state.posts[postIndex];
        const newComments = post.comments.concat(newComment);
        const newPost = {
          ...post,
          comments: newComments
        };
        const newPosts = [
          ...state.posts.slice(0, postIndex),
          newPost,
          ...state.posts.slice(postIndex + 1)
        ];
        return {
          ...state,
          posts: newPosts
        };
      }
    }
  },
});

  export default postSlice.reducer
  export const {likes, addComment} = postSlice.actions