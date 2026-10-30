import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import API from './assets/Components/API.jsx'
import Navbaar from './assets/Components/Navbaar.jsx';
import Hero from './assets/Components/Hero.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbaar />
    <Hero />
    <API />
  </StrictMode>,
)
