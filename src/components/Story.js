import React, { useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Appelation from './Appelation'
import { Container, Row } from 'react-bootstrap'
import { LanguageContext } from '../language/LanguageContext'

const appelList = [
	{ img: 'https://templars.guru/app/github/wine_api/Pinot%20Noir%20AOC.jpeg' },
	{ img: 'https://templars.guru/app/github/wine_api/Santenay%20Veille%20Vignes.jpeg' },
	{ img: 'https://templars.guru/app/github/wine_api/Marange%20Premier%20Cru.jpeg' },
	{ img: 'https://templars.guru/app/github/wine_api/Graviere%20Premier%20Cru.jpeg' },
	{ img: 'https://templars.guru/app/github/wine_api/Passe%20Temps%20Premier%20Cru.jpeg' },
	{ img: 'https://templars.guru/app/github/wine_api/La%20Comme%20Premier%20Cru.jpeg' },
	{ img: 'https://templars.guru/app/github/wine_api/Clos%20du%20Paradis%20Premier%20Cru.jpeg' },
	{ img: 'https://templars.guru/app/github/wine_api/Pommard%20Veille%20Vignes.jpeg' },
	{ img: 'https://templars.guru/app/github/wine_api/Corton%20Grand%20Cru.jpeg' },
	{ img: 'https://templars.guru/app/github/wine_api/Chardonnay%20AOC.jpeg' },
	{ img: 'https://templars.guru/app/github/wine_api/Morgeot%20Premier%20Cru.jpeg' },
	{ img: 'https://templars.guru/app/github/wine_api/Santenay%20Veille%20Vignes.jpeg' },
	{ img: 'https://templars.guru/app/github/wine_api/Chassagne%20Montrachet%20AOC%20Prestige%20.jpeg' },
]

export default function Story(props) {
	const { dictionary, language } = useContext(LanguageContext)

	return (
		<>
			<Container fluid className='container_home disable-select'>
				<Navbar className='navbar' handleUpdateLanguage={props.handleUpdateLanguage} language={language} />
				<div id='overlay'></div>
				<Container fluid className='container_wines'>
					{appelList.map((elem, count) => {
						count++
						console.log(count)
						console.log(elem.img)

						return (
							<>
								{count === 1 && <p>Red</p>}
								{count === 10 && <p>White</p>}
								<Appelation
									appelName={dictionary.contact_company_name}
									appelDesc={dictionary.contact_company_description}
									img={elem.img}
								/>
							</>
						)
					})}
				</Container>
				<Footer />
			</Container>
		</>
	)
}
