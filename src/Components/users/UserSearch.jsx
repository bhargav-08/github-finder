import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchUsers } from '../../context/github/GithubActions'

const UserSearch = () => {
  const [text, setText] = useState('')
  const { users, dispatch } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)

  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (text === '') {
      setAlert('Please Enter Something')
    } else {
      // set loading true
      dispatch({ type: 'SET_LOADING' })
      // search users and set back loading as false
      const items = await searchUsers(text)
      dispatch({ type: 'GET_USERS', payload: items })
      setText('')
    }
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mb-8 gap-8 '>
      <div className=''>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                onChange={handleChange}
                type='text'
                value={text}
                className='input input-lg w-full pr-16  sm:pr-40 bg-gray-200 text-black '
                placeholder='Search'
              />
              <button
                type='submit'
                className='absolute top-0 right-0 btn btn-lg rounded-l-none w-16 sm:w-36'>
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div className='btn btn-ghost btn-lg w-40'>
          <button onClick={() => dispatch({ type: 'CLEAR_USERS' })}>
            CLEAR
          </button>
        </div>
      )}
    </div>
  )
}
export default UserSearch
