import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import All from './All';
import Fsd from './Fsd';
import Ds from './Ds';
import Cs from './Cs';
import Career from './Career';

function App() {
	return (
		<Router>
			
			
        <nav>
        <Link to="/">All|</Link>           
        <Link to="/fsd">Full Stack Development|</Link>          
        <Link to="/ds">Data science|</Link>
        <Link to="/cs">Cyber Security|</Link>
        <Link to="/career">Career</Link>
        </nav>
        <Routes>
				<Route path='/' exact element={<All />} />
				<Route path='/fsd' element={<Fsd />} />
				<Route path='/ds' element={<Ds />} />
				<Route path='/cs' element={<Cs />} />
				<Route path='/career' element={<Career />} />
			</Routes>
		</Router>
	);
}

export default App;
