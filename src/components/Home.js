import React, { useEffect, useState, useRef } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap'
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
						console.log('intersecting home')
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
						console.log('intersecting wine')
						setVisible(false)
						observerWine = observerWine.disconnect()
					}
				}),
			{ rootMargin: '0px 0px -20px 0px' }
		)
		observerWine.observe(wines.current)
	})

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

					<Row ref={wines} className='row_title'>
						<Col className='col_title'>
							<h1>AN AWARD-WINNING PROSECCO CREATED BY THE DELEVINGNE SISTERS</h1>
						</Col>
					</Row>
				</Container>
			</Container>
			<Footer />
		</>
	)
}
