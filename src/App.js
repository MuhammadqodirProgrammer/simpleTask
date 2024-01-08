import './app.scss';
import Header from './components/Header/Header';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Error } from './pages/Error/Error';
import { Home } from './pages/Home/Home';
import Check from './pages/Check/Check';
import { useEffect } from 'react';

function App() {
	const navigate = useNavigate();
	const checkToken = localStorage.getItem('checkToken');
	useEffect(() => {
		if (!checkToken) {
			navigate('/check');
		}
	}, []);
	return (
		<div className={`App container-fluid `}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/check' element={<Check />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
