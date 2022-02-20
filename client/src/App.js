import React from 'react';
import { Navbar } from './components';
import {
	About,
	AddNewUser,
	AllUsers,
	AssignPermissions,
	EditUser,
	NotFound,
} from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
