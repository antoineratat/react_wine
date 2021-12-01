import React, { useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Wine from './Wine'
import imageWines from '../utils/imagesWines'
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
					{imageWines.map((elem, count) => {
						count++
						return (
							<Wine
								key={count}
								isLeft={count % 2 === 0}
								language={language}
								wineTitle={dictionary[`appel_title_${count - 1}`]}
								wineDescription={dictionary[`appel_desc_${count - 1}`]}
								wineImage={elem.img}
							/>
						)
					})}
				</Container>
				<Footer />
			</Container>
		</>
	)
}
