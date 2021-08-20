import React, { useEffect, useState, useRef, useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Animated } from 'react-animated-css'
import { LanguageContext } from '../language/LanguageContext'

export default function Wines(props) {
	const row_wines_1 = useRef()
	const row_wines_2 = useRef()
	const row_wines_3 = useRef()
	const [visibleRow1, setVisibleRow1] = useState(false)
	const [visibleRow2, setVisibleRow2] = useState(false)
	const [visibleRow3, setVisibleRow3] = useState(false)
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

		let observerRow3 = new IntersectionObserver(
			(entries) =>
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisibleRow3(true)
						observerRow3 = observerRow3.disconnect()
					}
				}),
			{ rootMargin: '0px 0px -300px 0px' }
		)
		observerRow3.observe(row_wines_3.current)
	})

	return (
		<>
			<Container fluid className='container_home disable-select'>
				<Navbar className='navbar' handleUpdateLanguage={props.handleUpdateLanguage} language={language} />
				<div id='overlay'></div>
				<Container fluid className='container_wines'>
					{/* ROW 1 */}
					<Row className='row_wines_1' ref={row_wines_1}>
						<Col className='col_wines_1'>
							<Animated
								className='animated_wines'
								animationIn='fadeInUp'
								animationOut='fadeOut'
								animationInDuration={2000}
								animationOutDuration={0}
								isVisible={visibleRow1}>
								<Image
									className='image_wines_1'
									src='https://www.datocms-assets.com/25196/1598624942-docg-test-2808.png?q=50&auto=format&dpr=1&w=600'
								/>
							</Animated>
						</Col>
						<Col className='col_wines_2'>
							<Animated
								className='animated_wines'
								animationIn='fadeIn'
								animationOut='fadeOut'
								animationInDuration={2000}
								animationOutDuration={0}
								isVisible={visibleRow1}>
								<Row className='wine_description'>
									<Col className='wine_description_left'>
										<h1 style={language === 'zh-CN' ? { fontFamily: 'hanzhen' } : ''}>{dictionary.wine_card_title_1}</h1>
										<h4>{dictionary.wine_card_description_1}</h4>
										<p>{dictionary.wine_card_location_1}</p>
									</Col>
									<Col className='wine_description_right'>
										<Row>
											<p className='title_contact'>{dictionary.wine_label_taste}</p>
											<p className='text_contact'>{dictionary.wine_card_taste_1}</p>
										</Row>
										<Row>
											<p className='title_contact'>{dictionary.wine_label_acidity}</p>
											<p className='text_contact'>{dictionary.wine_card_acidity_1}</p>
										</Row>
										<Row>
											<p className='title_contact'>{dictionary.wine_label_alcohol}</p>
											<p className='text_contact'>{dictionary.wine_card_alcohol_1}</p>
										</Row>
										<Row>
											<p className='title_contact'>{dictionary.wine_label_pressure}</p>
											<p className='text_contact'>{dictionary.wine_card_pressure_1}</p>
										</Row>
										<Row>
											<p className='title_contact'>{dictionary.wine_label_grape}</p>
											<p className='text_contact'>{dictionary.wine_card_grapes_1}</p>
										</Row>
									</Col>
								</Row>
							</Animated>
						</Col>
					</Row>
					{/* ROW 2 */}
					<Row className='row_wines_1' ref={row_wines_2}>
						<Col className='col_wines_3'>
							<Animated
								className='animated_wines'
								animationIn='fadeIn'
								animationOut='fadeOut'
								animationInDuration={2000}
								animationOutDuration={0}
								isVisible={visibleRow2}>
								<Row className='wine_description'>
									<Col className='wine_description_left'>
										<h1 style={language === 'zh-CN' ? { fontFamily: 'hanzhen' } : ''}>{dictionary.wine_card_title_2}</h1>
										<h4>{dictionary.wine_card_description_2}</h4>
										<p>{dictionary.wine_card_location_2}</p>
									</Col>
									<Col className='wine_description_right'>
										<Row>
											<p className='title_contact'>{dictionary.wine_label_taste}</p>
											<p className='text_contact'>{dictionary.wine_card_taste_2}</p>
										</Row>
										<Row>
											<p className='title_contact'>{dictionary.wine_label_acidity}</p>
											<p className='text_contact'>{dictionary.wine_card_acidity_2}</p>
										</Row>
										<Row>
											<p className='title_contact'>{dictionary.wine_label_alcohol}</p>
											<p className='text_contact'>{dictionary.wine_card_alcohol_2}</p>
										</Row>
										<Row>
											<p className='title_contact'>{dictionary.wine_label_pressure}</p>
											<p className='text_contact'>{dictionary.wine_card_pressure_2}</p>
										</Row>
										<Row>
											<p className='title_contact'>{dictionary.wine_label_grape}</p>
											<p className='text_contact'>{dictionary.wine_card_grapes_2}</p>
										</Row>
									</Col>
								</Row>
							</Animated>
						</Col>
						<Col className='col_wines_4'>
							<Animated
								className='animated_wines'
								animationIn='fadeInUp'
								animationOut='fadeOut'
								animationInDuration={2000}
								animationOutDuration={0}
								isVisible={visibleRow2}>
								<Image
									className='image_wines_1'
									src='https://www.datocms-assets.com/25196/1598624942-docg-test-2808.png?q=50&auto=format&dpr=1&w=600'
								/>
							</Animated>
						</Col>
					</Row>
					{/* ROW 3 */}
					<Row className='row_wines_1' ref={row_wines_3}>
						<Col className='col_wines_1'>
							<Animated
								className='animated_wines'
								animationIn='fadeInUp'
								animationOut='fadeOut'
								animationInDuration={2000}
								animationOutDuration={0}
								isVisible={visibleRow3}>
								<Image
									className='image_wines_1'
									src='https://www.datocms-assets.com/25196/1598624942-docg-test-2808.png?q=50&auto=format&dpr=1&w=600'
								/>
							</Animated>
						</Col>
						<Col className='col_wines_2'>
							<Animated
								className='animated_wines'
								animationIn='fadeIn'
								animationOut='fadeOut'
								animationInDuration={2000}
								animationOutDuration={0}
								isVisible={visibleRow3}>
								<Row className='wine_description'>
									<Col className='wine_description_left'>
										<h1 style={language === 'zh-CN' ? { fontFamily: 'hanzhen' } : ''}>{dictionary.wine_card_title_3}</h1>
										<h4>{dictionary.wine_card_description_3}</h4>
										<p>{dictionary.wine_card_location_3}</p>
									</Col>
									<Col className='wine_description_right'>
										<Row>
											<p className='title_contact'>{dictionary.wine_label_taste}</p>
											<p className='text_contact'>{dictionary.wine_card_taste_3}</p>
										</Row>
										<Row>
											<p className='title_contact'>{dictionary.wine_label_acidity}</p>
											<p className='text_contact'>{dictionary.wine_card_acidity_3}</p>
										</Row>
										<Row>
											<p className='title_contact'>{dictionary.wine_label_alcohol}</p>
											<p className='text_contact'>{dictionary.wine_card_alcohol_3}</p>
										</Row>
										<Row>
											<p className='title_contact'>{dictionary.wine_label_pressure}</p>
											<p className='text_contact'>{dictionary.wine_card_pressure_3}</p>
										</Row>
										<Row>
											<p className='title_contact'>{dictionary.wine_label_grape}</p>
											<p className='text_contact'>{dictionary.wine_card_grapes_3}</p>
										</Row>
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
