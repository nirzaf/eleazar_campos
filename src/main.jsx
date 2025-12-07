import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import faviconUrl from '../profile.png'

const rootEl = document.getElementById('root')
const existingIcon = document.querySelector('link[rel="icon"]')
const linkIcon = existingIcon || document.createElement('link')
linkIcon.rel = 'icon'
linkIcon.type = 'image/png'
linkIcon.href = faviconUrl
if (!existingIcon) document.head.appendChild(linkIcon)
createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
