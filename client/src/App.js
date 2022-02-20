import React from 'react';
import Navbar from './components/Navbar/Navbar';
import AddNewUser from './pages/AddNewUser/AddNewUser';
import AllUsers from './pages/AllUsers/AllUsers';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditUser from './pages/EditUser/EditUser';
import AssignPermissions from './pages/AssignPermissions/AssignPermissions';

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<AllUsers />} />
					<Route exact path='/about' element={<About />} />
					<Route exact path='/add-new-user' element={<AddNewUser />} />
					<Route exact path='/edit/:id' element={<EditUser />} />
					<Route exact path='/assign/:id' element={<AssignPermissions />} />
					<Route path='*' exact={true} element={<NotFound />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
