const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        loading: false,
        users: action.payload,
      }

    case 'GET_USER_REPOS':
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        repos: action.payload.repos,
      }

    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }

    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      }

    default:
      return state
  }
}

export default githubReducer
