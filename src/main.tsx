/**
 * @copyright 2026 Jaidev Singh
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { ChatBot } from './components/Chatbot';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/**
 * Styles
 */
import './index.css';

/**
 * Components
 */
import { App } from '@/App';
import { Sidebar } from '@/components/Sidebar';
import { FloatingMenu } from './components/FloatingMenu';
import { Profile } from './components/Profile';
import { Resume } from './components/Resume';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <div className='min-h-screen lg:flex lg:justify-center lg:items-start lg:gap-10'>
              <Sidebar />
              <FloatingMenu />
              <Profile />
              <App />
              <ChatBot />
            </div>
          }
        />
        <Route
          path='/resume'
          element={<Resume />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
