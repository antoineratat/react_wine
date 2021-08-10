import './App.css'
import { useState, useEffect } from 'react'

import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'

import getLanguage from './utils/getLanguage'
import handleChangeLanguage from './utils/handleChangeLanguage'
import { LanguageContext } from './language/LanguageContext'
import { dictionaryList } from './language/languages'

import Home from './components/Home'
import Story from './components/Story'
import Wines from './components/Wines'
import Winery from './components/Winery'
import Contact from './components/Contact'

function App() {
	const [language, setLanguage] = useState('')
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		if (localStorage.getItem('language') === null) {
			const language = getLanguage()
			localStorage.setItem('language', language)
			setLanguage(language)
			setIsLoaded(true)
		} else {
			setLanguage(localStorage.getItem('language'))
			setIsLoaded(true)
		}
	}, [])

	function handleUpdateLanguage(language) {
		setLanguage(language)
		handleChangeLanguage(language)
	}

	function LanguageProvider({ children }) {
		const provider = {
			language,
			dictionary: dictionaryList[language],
		}

		return <LanguageContext.Provider value={provider}>{children}</LanguageContext.Provider>
	}

	if (!isLoaded) {
		return null
	} else {
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
					<Route path='/home' render={(props) => <Home handleUpdateLanguage={handleUpdateLanguage} {...props} />} />
					<Route path='/story' render={(props) => <Story handleUpdateLanguage={handleUpdateLanguage} {...props} />} />
					<Route path='/wines' render={(props) => <Wines handleUpdateLanguage={handleUpdateLanguage} {...props} />} />
					<Route path='/winery' render={(props) => <Winery handleUpdateLanguage={handleUpdateLanguage} {...props} />} />
					<Route path='/contact' render={(props) => <Contact handleUpdateLanguage={handleUpdateLanguage} {...props} />} />
					<Redirect from='/' to='/home' />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App
