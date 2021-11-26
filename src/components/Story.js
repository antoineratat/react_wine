import React, { useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Appelation from './Appelation'
import appelList from '../utils/imagesAppelations'
import { Container, Row, Col } from 'react-bootstrap'
import { LanguageContext } from '../language/LanguageContext'
import { Animated } from 'react-animated-css'

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
						return (
							<div key={count}>
								{count === 1 && (
									<Row>
										<Col>
											<h1 className='title_appel'>{dictionary.appel_wine_red}</h1>
										</Col>
									</Row>
								)}
								{count === 10 && (
									<Row>
										<Col>
											<h1 className='title_appel'>{dictionary.appel_wine_white}</h1>
										</Col>
									</Row>
								)}
								<Animated
									animationIn='fadeIn'
									animationOut='fadeOut'
									animationInDuration={2000}
									animationOutDuration={0}
									// style={{ minHeight: '179.66px' }}>
								>
									<Appelation
										appelName={dictionary[`appel_title_${count - 1}`]}
										appelDesc={dictionary[`appel_desc_${count - 1}`]}
										img={elem.img}
									/>
								</Animated>
							</div>
						)
					})}
				</Container>
				<Footer />
			</Container>
		</>
	)
}
