import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const umamiId = import.meta.env.VITE_UMAMI_WEBSITE_ID;
const umamiHost = import.meta.env.VITE_UMAMI_HOST || "https://analytics.umami.is";
if (umamiId) {
  const script = document.createElement("script");
  script.async = true;
  script.defer = true;
  script.src = `${umamiHost}/script.js`;
  script.setAttribute("data-website-id", umamiId);
  document.head.appendChild(script);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
