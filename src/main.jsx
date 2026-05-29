import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import { App } from "./App.jsx"
import "./css/main.css"
import 'katex/dist/katex.min.css';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
