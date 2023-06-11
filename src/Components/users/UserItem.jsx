import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className='card card-compact shadow-xl bg-base-300'>
      <div className='card-body space-x-4 flex-row items-center'>
        <div className='avatar'>
          <div className='w-14 shadow h-14 rounded-full'>
            <img src={avatar_url} alt='Profile Photo' />
          </div>
        </div>
        <div>
          <div className='card-title'>{login}</div>
          <Link
            to={`/user/${login}`}
            className='text-base-content text-opacity-40'>
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
