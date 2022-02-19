import React from 'react';
import Navbar from './components/Navbar';
import AddNewUser from './pages/AddNewUser';
import AllUsers from './pages/AllUsers';
import NotFound from './pages/NotFound';
import About from './pages/About';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Switch,
	Redirect,
} from 'react-router-dom';

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<AllUsers />} />
					<Route exact path='/about' element={<About />} />
					<Route exact path='/add-new-user' element={<AddNewUser />} />
					<Route path='*' exact={true} element={<NotFound />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
