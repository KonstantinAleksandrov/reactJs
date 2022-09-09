import {createSelector} from "reselect";

const defaultState = {
  posts: [],
  activePost: {},
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return {...state, posts: action.payload}
    case 'SET_ACTIVE_POST':
      return {...state, activePost: action.payload}
    case "CHANGE_DATE":
      return {...state, activePost: {...state.activePost, date: action.payload}}
    case "CHANGE_DISTANCE":
      return {...state, activePost: {...state.activePost, distance: action.payload}}
    default :
      return state
  }
}

const postReducerSelector = state => state.postReducer
export const lastIdSelector = createSelector(postReducerSelector, postReducer => Math.max(...postReducer.posts.map(post => post.id)))
export const sortedPostsSelector = createSelector(postReducerSelector, postReducer => {
  const {posts} = {...postReducer}
  posts.sort((a, b) => {
    if (a.date > b.date) return 1
    if (a.date < b.date) return -1
    if (a.date === b.date) return 0
  })
  return posts
})

export const onGetPosts = () => async (dispatch) => {
  const response = await fetch("http://127.0.0.1:900/posts")
  const result = await response.json()
  dispatch({type: 'GET_POSTS', payload: result})
}

export const onSetNewPost = (lastPostId) => async (dispatch, getState) => {
  const {formReducer} = getState()

  if (formReducer.date && formReducer.distance) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const newId = (lastPostId < 0) ? 0 : lastPostId + 1
    let raw = JSON.stringify({ ...formReducer, "id": newId});

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:900/posts", requestOptions)
      .then(response => response.json())
      .then((result) => {
        dispatch({type: "TRUNCATE"})
        dispatch({type:'GET_POSTS',payload : result})
      })
  }
}
