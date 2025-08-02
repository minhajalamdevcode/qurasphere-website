import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ReactLenis from 'lenis/react';
// import SplashCursor from './components/global/SplashCursor.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <SplashCursor /> */}
    <ReactLenis root>
      <App />
    </ReactLenis>
  </StrictMode>
);
