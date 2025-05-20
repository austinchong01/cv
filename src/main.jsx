import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/index.css"
import "./styles/Cv.css"
import {Form} from './components/Cv.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
  </StrictMode>,
)
