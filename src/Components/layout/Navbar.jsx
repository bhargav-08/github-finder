import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import PropTypes from 'prop-types'

const Navbar = ({ title }) => {
  return (
    <nav className='navbar shadow-lg bg-neutral text-white'>
      <div className='container mx-auto'>
        <div className='px-2 mx-2'>
          <FaGithub className='inline text-3xl pr-2' />
          <Link to='/' className='text-lg font-bold align-middle'>
            {title}
          </Link>
        </div>
        <div className='flex flex-1 justify-end px-2 mx-2'>
          <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
            Home
          </Link>
          <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder',
}
Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
