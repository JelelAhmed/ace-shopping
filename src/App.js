import React from 'react';
import {  Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

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
				<Route path='sign-in' element={<SignIn />} />
			</Route>
		</Routes>
	)
}

export default App;
