import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/config'
import { logout } from "../../store/authSlice"

function LogoutBtn() {
    const dispatch = useDispatch()
    const logouthandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounde-full'
    >Logoput</button>
  )
}

export default LogoutBtn