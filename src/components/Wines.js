import React, { useEffect, useState, useRef, useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Animated } from 'react-animated-css'
import { LanguageContext } from '../language/LanguageContext'

export default function Wines(props) {
	const row_wines_1 = useRef()
	const row_wines_2 = useRef()
	const [visibleRow1, setVisibleRow1] = useState(false)
	const [visibleRow2, setVisibleRow2] = useState(false)
	const { dictionary, language } = useContext(LanguageContext)

	useEffect(() => {
		let observerRow1 = new IntersectionObserver(
			(entries) =>
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisibleRow1(true)
						observerRow1 = observerRow1.disconnect()
					}
				}),
			{ rootMargin: '0px 0px 0px 0px' }
		)
		observerRow1.observe(row_wines_1.current)

		let observerRow2 = new IntersectionObserver(
			(entries) =>
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisibleRow2(true)
						observerRow2 = observerRow2.disconnect()
					}
				}),
			{ rootMargin: '0px 0px -400px 0px' }
		)
		observerRow2.observe(row_wines_2.current)
	})

	return (
		<>
			<Container fluid className='container_home disable-select'>
				<Navbar className='navbar' handleUpdateLanguage={props.handleUpdateLanguage} language={language} />
				<div id='overlay'></div>
				<Container fluid className='container_wines'>
					{/* WINE1 */}
					<Row ref={row_wines_1} className='row_wines'>
						<Col xs={{ span: 12 }} md={{ span: 4 }} lg={{ span: 3 }} xl={{ span: 3 }}>
							<Animated
								className='animated_wines'
								animationIn='fadeInUp'
								animationOut='fadeOut'
								animationInDuration={2000}
								animationOutDuration={0}
								isVisible={visibleRow1}>
								<Image
									className='image_wines_1'
									src='https://templars.guru/app/github/wine_api/bottle.png'
								/>
							</Animated>
						</Col>
						<Col xs={{ span: 12 }} md={{ span: 8 }} lg={{ span: 9 }} xl={{ span: 9 }}>
							<Animated
								className='animated_wines'
								animationIn='fadeIn'
								animationOut='fadeOut'
								animationInDuration={2000}
								animationOutDuration={0}
								isVisible={visibleRow1}>
								<Row className='wine_description'>
									<Col className='wine_description_left'>
										<h1 style={language === 'zh-CN' ? { fontFamily: 'hanzhen' } : {}}>
											{dictionary.wine_card_title_1}
										</h1>
										<h4>{dictionary.wine_card_description_1}</h4>
									</Col>
								</Row>
							</Animated>
						</Col>
					</Row>

					{/* WINE2 */}
					<Row ref={row_wines_2} className='row_wines'>
						<Col
							xs={{ order: 1, span: 12 }}
							md={{ order: 2, span: 4 }}
							lg={{ order: 2, span: 3 }}
							xl={{ order: 2, span: 3 }}>
							<Animated
								className='animated_wines'
								animationIn='fadeInUp'
								animationOut='fadeOut'
								animationInDuration={2000}
								animationOutDuration={0}
								isVisible={visibleRow2}>
								<Image
									className='image_wines_1'
									src='https://templars.guru/app/github/wine_api/bottle.png'
								/>
							</Animated>
						</Col>
						<Col
							xs={{ order: 2, span: 12 }}
							md={{ order: 1, span: 8 }}
							lg={{ order: 1, span: 9 }}
							xl={{ order: 1, span: 9 }}>
							<Animated
								className='animated_wines'
								animationIn='fadeIn'
								animationOut='fadeOut'
								animationInDuration={2000}
								animationOutDuration={0}
								isVisible={visibleRow2}>
								<Row className='wine_description'>
									<Col className='wine_description_left'>
										<h1 style={language === 'zh-CN' ? { fontFamily: 'hanzhen' } : {}}>
											{dictionary.wine_card_title_1}
										</h1>
										<h4>{dictionary.wine_card_description_1}</h4>
									</Col>
								</Row>
							</Animated>
						</Col>
					</Row>
				</Container>
				<Footer />
			</Container>
		</>
	)
}
