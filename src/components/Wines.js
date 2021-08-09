import React, { useEffect, useState, useRef } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Animated } from 'react-animated-css'

export default function Wines() {
	const row_wines_1 = useRef()
	const row_wines_2 = useRef()
	const row_wines_3 = useRef()
	const [visibleRow1, setVisibleRow1] = useState(false)
	const [visibleRow2, setVisibleRow2] = useState(false)
	const [visibleRow3, setVisibleRow3] = useState(false)

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
			<Container fluid className='container_home'>
				<Navbar className='navbar' />
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
								isVisible={visibleRow1}>
								<Image
									className='image_wines_1'
									src='https://www.datocms-assets.com/25196/1598624942-docg-test-2808.png?q=50&auto=format&dpr=1&w=600'
								/>
							</Animated>
						</Col>
						<Col className='col_wines_2'>
							<Row className='wine_description'>
								<Col className='wine_description_left'>
									<h1>Company Name</h1>
									<h4>
										Rich and extra-dry with a highly mineral palate that lingers, our Prosecco Superiore DOCG is characterised by hints of
										crostini and chamomile.
									</h4>
									<p>45.9013° N, 11.9959° E, NORTHERN ITALY</p>
								</Col>
								<Col className='wine_description_right'>
									<Row>
										<p className='title_contact'>Phone</p>
										<p className='text_contact'>13111881660</p>
									</Row>
									<Row>
										<p className='title_contact'>Phone</p>
										<p className='text_contact'>13111881660</p>
									</Row>
									<Row>
										<p className='title_contact'>Phone</p>
										<p className='text_contact'>13111881660</p>
									</Row>
									<Row>
										<p className='title_contact'>Phone</p>
										<p className='text_contact'>13111881660</p>
									</Row>
									<Row>
										<p className='title_contact'>Phone</p>
										<p className='text_contact'>13111881660</p>
									</Row>
									<Row>
										<p className='title_contact'>Phone</p>
										<p className='text_contact'>13111881660</p>
									</Row>
								</Col>
							</Row>
						</Col>
					</Row>
					{/* ROW 2 */}
					<Row className='row_wines_1' ref={row_wines_2}>
						<Col className='col_wines_3'>1</Col>
						<Col className='col_wines_4'>
							<Animated
								className='animated_wines'
								animationIn='fadeInUp'
								animationOut='fadeOut'
								animationInDuration={2000}
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
								isVisible={visibleRow3}>
								<Image
									className='image_wines_1'
									src='https://www.datocms-assets.com/25196/1598624942-docg-test-2808.png?q=50&auto=format&dpr=1&w=600'
								/>
							</Animated>
						</Col>
						<Col className='col_wines_2'>2</Col>
					</Row>
				</Container>
				<Footer />
			</Container>
		</>
	)
}
