import PropTypes from 'prop-types'
import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

export const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const intialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, intialState)


  // It is used to search user and fill user array

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}>
      {children}
    </GithubContext.Provider>
  )
}

GithubProvider.propTypes = {
  children: PropTypes.object,
}

export default GithubContext
