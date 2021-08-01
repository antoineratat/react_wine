import './App.css'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import getRoutes from './utils/getRoutes'
import { routes } from './routes'

function App() {
	return (
		<BrowserRouter>
			<video
				id='background_big'
				src='https://res.cloudinary.com/della-vite/video/upload/f_auto,q_auto,ac_none,f_auto,w_1400/dato/1598299900-dvwebsitehomepagegeneral16x9.mp4'
				loop='loop'
				muted='muted'
				autoPlay='autoplay'
				playsInline=''
				className='backgroundMedia'
				data-video='0'></video>

			<video
				id='background_small'
				src='https://res.cloudinary.com/della-vite/video/upload/f_auto,q_auto,ac_none,f_auto,w_900/dato/1598299917-dvwebsitehomepagegeneral9x16.mp4'
				loop='loop'
				muted='muted'
				autoPlay='autoplay'
				playsInline=''
				className='backgroundMedia'
				data-video='0'></video>
			<Switch>
				{getRoutes(routes)}
				<Redirect from='/' to='/home' />
			</Switch>
		</BrowserRouter>
	)
}

export default App
