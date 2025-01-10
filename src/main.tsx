import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom' 
import { router } from './App'
import AuthProvider from './contexts/AuthContext'
import { register } from 'swiper/element'

register()

import "swiper/swiper-bundle.css"

import { Toaster } from 'react-hot-toast'






createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster
    position='top-right'
    reverseOrder={false}
    />
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
