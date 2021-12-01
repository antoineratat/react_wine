import React, { useEffect, useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Wine from './Wine'
import { Container } from 'react-bootstrap'

import { LanguageContext } from '../language/LanguageContext'

export default function Wines(props) {
	const { dictionary, language } = useContext(LanguageContext)

	return (
		<>
			<Container fluid className='container_home disable-select'>
				<Navbar className='navbar' handleUpdateLanguage={props.handleUpdateLanguage} language={language} />
				<div id='overlay'></div>
				<Container fluid className='container_wines'>
					<Wine
						isLeft={true}
						language={language}
						wineTitle={'wineTitle'}
						wineDescription={'WineDescription'}
						wineImage={'https://templars.guru/app/github/wine_api/bottle.png'}
					/>
					<Wine
						isLeft={false}
						language={language}
						wineTitle={'wineTitle'}
						wineDescription={'WineDescription'}
						wineImage={'https://templars.guru/app/github/wine_api/bottle.png'}
					/>
				</Container>
				<Footer />
			</Container>
		</>
	)
}
