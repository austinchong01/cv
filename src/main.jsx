import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./Cv.css"
import {Form} from './Cv.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
  </StrictMode>,
)
