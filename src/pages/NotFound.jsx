import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='text-center space-y-8 '>
      <div className='text-6xl'>Oops!</div>
      <div className='text-4xl'>404 Page Not Found!!</div>
      <div className='btn btn-primary'>
        <FaHome />
        <Link to='/'>Go to Home</Link>
      </div>
    </div>
  )
}
export default NotFound
