import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../app/features/authSlice'


const Navbar = () => {
    
    const {user} = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const logoutUser = () =>{
        navigate("/")
        dispatch(logout())
    }

  return (
    <div className='shadow bg-white'>
        <nav className='flex  items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all'>
            <Link to='/' className="font-bold text-2xl z-20 relative">
          <span className="text-purple-600">Resume</span>
          <span className="text-black">Craft</span>
        </Link>
            <div  className='flex items-center gap-4 text-base font-semibold'>
                <p className='max-sm:hidden'>Welcome , {user?.name}</p>
                <button onClick={logoutUser} className='bg-white  border border-purple-900 hover:bg-purple-950/50 px-7 py-2 font-semibold rounded-full active:scale-95 transition-all'>Logout</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar