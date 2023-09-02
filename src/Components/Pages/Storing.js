import React from 'react'
import { Outlet } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../Utility/Redux/store'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import NavBar from '../Nav/NavBar';

const Storing = () => {
  return (
    <>
    <Provider store={store}>
      <main>
        <ToastContainer/>
        <div className="navbar-main">
        <NavBar/>
        </div>
        <Outlet/>
      </main>
      
      </Provider>
      
    </>
  )
}

export default Storing
