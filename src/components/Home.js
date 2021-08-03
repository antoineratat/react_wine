import React, { useEffect, useState, useRef } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Animated } from 'react-animated-css'

export default function Home() {
	const home = useRef()
	const wines = useRef()
	const learn_more = useRef()
	const scrolldown = useRef()
	const [visible, setVisible] = useState(true)

	useEffect(() => {
		let observerHome = new IntersectionObserver(
			(entries) =>
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisible(true)
						observerHome = observerHome.disconnect()
					}
				}),
			{ rootMargin: '0px 0px 0px 0px' }
		)
		observerHome.observe(home.current)

		let observerWine = new IntersectionObserver(
			(entries) =>
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisible(false)
						observerWine = observerWine.disconnect()
					}
				}),
			{ rootMargin: '0px 0px -20px 0px' }
		)
		observerWine.observe(wines.current)
	})

	const onWineIn = (e) => {
		let image = document.getElementById(e.target.id).getElementsByTagName('img')[0]
		image.style.transform = 'translate(0, -10px)'
	}

	const onWineOut = (e) => {
		let image = document.getElementById(e.target.id).getElementsByTagName('img')[0]
		image.style.transform = 'translate(0, 0px)'
	}

	return (
		<>
			<div ref={home}></div>
			<Container fluid>
				<Navbar className='navbar' />
				<div id='overlay'></div>
				<Container className='container_home disable-select'>
					<Row className='row_title'>
						<Col className='col_title'>
							<h1>AN AWARD-WINNING PROSECCO CREATED BY THE DELEVINGNE SISTERS</h1>
						</Col>
					</Row>
					<Animated animationIn='fadeIn' animationOut='fadeOut' animationInDuration={1000} isVisible={visible}>
						<Row className='row_learn_more'>
							<p ref={learn_more} className='text_learn_more'>
								Learn More
							</p>
							<Col className='col_scrolldown'>
								<div ref={scrolldown} className='scrolldown'></div>
							</Col>
						</Row>
					</Animated>
				</Container>

				<Row ref={wines} className='row_wines disable-select'>
					<Col className='col_wines'>
						<Link to='/wines' onMouseEnter={(e) => onWineIn(e)} onMouseLeave={(e) => onWineOut(e)}>
							<Animated animationIn='zoomIn' animationOut='fadeOut' animationInDuration={1500} isVisible={!visible}>
								<Card id='card1' className='card_wine'>
									<Card.Img
										className='image_wine'
										variant='top'
										src='https://www.datocms-assets.com/25196/1598624942-docg-test-2808.png?q=50&auto=format&dpr=1&w=600'
									/>
									<Card.Body>
										<Card.Title>Superiore</Card.Title>
										<Card.Text>D.O.C.G Bottles</Card.Text>
									</Card.Body>
								</Card>
							</Animated>
						</Link>
					</Col>

					<Col className='col_wines'>
						<Link to='/wines' onMouseEnter={(e) => onWineIn(e)} onMouseLeave={(e) => onWineOut(e)}>
							<Animated animationIn='zoomIn' animationOut='fadeOut' animationInDuration={1500} isVisible={!visible}>
								<Card id='card2' className='card_wine'>
									<Card.Img
										className='image_wine'
										variant='top'
										src='https://www.datocms-assets.com/25196/1598624942-docg-test-2808.png?q=50&auto=format&dpr=1&w=600'
									/>
									<Card.Body>
										<Card.Title>Superiore</Card.Title>
										<Card.Text>D.O.C.G Bottles</Card.Text>
									</Card.Body>
								</Card>
							</Animated>
						</Link>
					</Col>

					<Col className='col_wines'>
						<Link to='/wines' onMouseEnter={(e) => onWineIn(e)} onMouseLeave={(e) => onWineOut(e)}>
							<Animated animationIn='zoomIn' animationOut='fadeOut' animationInDuration={1500} isVisible={!visible}>
								<Card id='card3' className='card_wine'>
									<Card.Img
										className='image_wine'
										variant='top'
										src='https://www.datocms-assets.com/25196/1598624942-docg-test-2808.png?q=50&auto=format&dpr=1&w=600'
									/>
									<Card.Body>
										<Card.Title>Superiore</Card.Title>
										<Card.Text>D.O.C.G Bottles</Card.Text>
									</Card.Body>
								</Card>
							</Animated>
						</Link>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	)
}
