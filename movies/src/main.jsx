import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './components/app/app.jsx'
import Provider from './components/context/index.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <Provider>
      <App/>
    </Provider>
  </StrictMode>,
)
