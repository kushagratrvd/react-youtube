import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import {Footer, Header} from './components'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("Starting auth check...")
    console.log("Appwrite URL:", import.meta.env.VITE_APPWRITE_URL);
    console.log("Bucket ID:", import.meta.env.VITE_APPWRITE_BUCKET_ID);
    authService.getCurrentUser()
    .then((userData) => {
        console.log("User data:", userData)
        if(userData){
            dispatch(login({userData}))
        } else{
            dispatch(logout())
        }
    })
    .catch((error) => {
        console.error("Auth error:", error)
        dispatch(logout())
    })
    .finally(() => {
        console.log("Auth check complete")
        setLoading(false)
    })
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
        TODO:  <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
