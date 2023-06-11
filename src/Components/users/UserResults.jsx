import { useContext } from 'react'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'

const UserResults = () => {
  const { loading, users } = useContext(GithubContext)

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 p-5'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  } else
    return (
      <div className='btn bg-base-100 border-none'>
        <span className='loading loading-spinner loading-lg'>Loading</span>
      </div>
    )
}
export default UserResults
