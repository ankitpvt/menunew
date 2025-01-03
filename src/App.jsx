import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuCard from './MenuCard';
import JiduCard from './Jidu';
import VishalCard from './Vishal';
import YashCard from './Yash';
import HomePage from './HomePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/menucard" element={<MenuCard/>} />
                <Route path='/jidu' element={<JiduCard/>}/>
                <Route path='/vishal' element={<VishalCard/>}/>
                <Route path='/yash' element={<yash/>}/>
               
            </Routes>
        </Router>
    );
}

export default App;
