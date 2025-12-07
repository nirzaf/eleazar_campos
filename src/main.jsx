import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Dynamic Favicon Injection
// Using vite-imagetools to resize the profile image at build time
import favicon32 from '../profile.png?w=32&h=32&format=png&as=url'
import appleTouch180 from '../profile.png?w=180&h=180&format=png&as=url'

const setFavicon = () => {
  const head = document.head
  
  let linkIcon = document.querySelector('link[rel="icon"]')
  if (!linkIcon) {
    linkIcon = document.createElement('link')
    linkIcon.rel = 'icon'
    head.appendChild(linkIcon)
  }
  linkIcon.type = 'image/png'
  linkIcon.href = favicon32

  let linkApple = document.querySelector('link[rel="apple-touch-icon"]')
  if (!linkApple) {
    linkApple = document.createElement('link')
    linkApple.rel = 'apple-touch-icon'
    head.appendChild(linkApple)
  }
  linkApple.href = appleTouch180
}

setFavicon()

const rootEl = document.getElementById('root')
createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
