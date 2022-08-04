import React from 'react';
import {  Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

import './App.css';


const ShopPage = () => (
	<div>'I am the shop page'</div>
)

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<ShopPage />} />
			</Route>
		</Routes>
	)
}

export default App;
