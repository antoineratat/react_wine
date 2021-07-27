import './App.css'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import getRoutes from './utils/getRoutes'
import { routes } from './routes'

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				{getRoutes(routes)}
				<Redirect from='/' to='/home' />
			</Switch>
		</BrowserRouter>
	)
}

export default App
