import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/layout/Navbar'
import Footer from './Components/layout/Footer'
import Alert from './Components/layout/Alert'
import User from './Components/layout/User'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'

function App() {
  return (
    <>
      <GithubProvider>
        <AlertProvider>
          <Router>
            <div className='flex flex-col justify-between h-screen gap-8'>
              <Navbar />
              <div className='relative'>
                <main className='container mx-auto p-16'>
                  <Alert />
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/user/:login' element={<User />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/notfound' element={<NotFound />} />
                    <Route path='/*' element={<NotFound />} />
                  </Routes>
                </main>
              </div>
              <Footer />
            </div>
          </Router>
        </AlertProvider>
      </GithubProvider>
    </>
  )
}

export default App
