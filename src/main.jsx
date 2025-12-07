import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import favicon32 from '../profile.png?w=32&h=32&format=png&as=url'
import appleTouch180 from '../profile.png?w=180&h=180&format=png&as=url'

const rootEl = document.getElementById('root')
const existingIcon = document.querySelector('link[rel="icon"]')
const linkIcon = existingIcon || document.createElement('link')
linkIcon.rel = 'icon'
linkIcon.type = 'image/png'
linkIcon.sizes = '32x32'
linkIcon.href = favicon32
if (!existingIcon) document.head.appendChild(linkIcon)

const existingApple = document.querySelector('link[rel="apple-touch-icon"]')
const linkApple = existingApple || document.createElement('link')
linkApple.rel = 'apple-touch-icon'
linkApple.sizes = '180x180'
linkApple.href = appleTouch180
if (!existingApple) document.head.appendChild(linkApple)
createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
