import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'

// **********************************************
// Naya Import: FloatingChatButton component import kiya
import FloatingChatButton from './components/FloatingChatButton.jsx' 
// **********************************************

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* Naya: Button component ko App ke bagal mein render kiya */}
    {/* Yeh FloatingChatButton ke andar puri chat logic hai (state aur UI) */}
    <FloatingChatButton /> 
  </StrictMode>,
)