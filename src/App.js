import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feeds/Feed';


function App() {
  return (
    <div className='app-wrapper'>
       <Header />
          <div className='app_body'>
            <Sidebar />
            <Feed />

         </div>
    </div>
  );
}

export default App;
