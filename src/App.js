import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {Ecommerce, Orders, Calendar, Employees, Stacked,
  Pyramid, Customers, Kanban, Area, Bar, Pie, Financial,
  ColorPicker, ColorMapping, Editor, Line  } from './pages';
  
import { useStateContext } from './contexts/ContextProvider';
  
import './App.css'

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button type='button'
              className='text 3x1 p-3
              hover:drop-shadow-xl
              hover:bg-light-gray text-white'
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor,
              borderRadius: '50%' }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar
            dark:bg-secondary-dark-bg
            bg-white'>
              <Sidebar />
            </div>
            ) : (
            <div className='w-0 
            dark:bg-secondary-dark-bg'>
              <Sidebar />
              </div>
            )}
            <div className={
              `dark:bg-main-dark-bg bg-main-bg 
              min-h-screen w-full ${activeMenu ?
               'md:ml-72' : 'flex-2'}`
            }>
              <div className='fixed md:static
              bg-main-bg dark:bg-main-dark-bg
              navbar w-full'>
                <Navbar />
              </div>
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* Dashboard */}
                <Route path='/Project_Dashboard' element={<Ecommerce />} />
                <Route path='/Project_Dashboard/ecommerce' element={<Ecommerce />} />
                {/* Pages */}
                <Route path='/Project_Dashboard/orders' element={<Orders />} />
                <Route path='/Project_Dashboard/employees' element={<Employees />} />
                <Route path='/Project_Dashboard/customers' element={<Customers />} />
                {/* Apps */}
                <Route path='/Project_Dashboard/kanban' element={<Kanban />} />
                <Route path='/Project_Dashboard/editor' element={<Editor />} />
                <Route path='/Project_Dashboard/calendar' element={<Calendar />} />
                <Route path='/Project_Dashboard/color-picker' element={<ColorPicker />} />
                {/* Charts */}
                <Route path='/Project_Dashboard/line' element={<Line />} />
                <Route path='/Project_Dashboard/area' element={<Area />} />
                <Route path='/Project_Dashboard/bar' element={<Bar />} />
                <Route path='/Project_Dashboard/pie' element={<Pie />} />
                <Route path='/Project_Dashboard/financial' element={<Financial />} />
                <Route path='/Project_Dashboard/pyramid' element={<Pyramid />} />
                <Route path='/Project_Dashboard/stacked' element={<Stacked />} />
              </Routes>
            </div>
        </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App