import React, { useEffect, useState, useRef } from 'react'
import Navbar from './Navbar'
// import { Link } from 'react-router-dom'
import Footer from './Footer'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Animated } from 'react-animated-css'

export default function Story() {
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

	return (
		<>
			<div ref={home}></div>
			<Container fluid className='disable-select container_story'>
				<Navbar className='navbar' />
				<div id='overlay'></div>
				<Container className='container_home'>
					<Row className='row_title'>
						<Col className='col_title'>
							<h1>OUR JOURNEY OF DISCOVERY</h1>
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
				<Row ref={wines} className='row_description_story'>
					<Col>
						<h1 className='title_story'>EXCEPTIONAL QUALITY PROSECCO MADE USING SUSTAINABLE METHODS</h1>
					</Col>
				</Row>

				<Animated animationIn='fadeIn' animationOut='fadeOut' animationInDuration={1000} isVisible={true}>
					<Row className='row_picture_story_1'>
						<Col className='col_picture_story_1'>
							<div>
								<h1 className='black'>An Untold Story</h1>
								<p>
									Beneath the Dolomite mountains, the hills of Valdobbiadene are alive with the local culture, knowledge and passion for
									making Prosecco. As it's so little known to the world beyond, Della Vite (meaning ‘from the vine’) sets out to tell
									Prosecco’s real story.{' '}
								</p>
							</div>
						</Col>
						<Col className='col_picture_story_2'>
							<Image
								className='col_picture_story_picture_1'
								src='https://www.datocms-assets.com/25196/1597320030-dellavite02b1574.jpg?q=50&auto=format&dpr=1&w=1920&h=1540&fit=crop'
							/>
						</Col>
					</Row>
				</Animated>

				<Animated animationIn='fadeIn' animationOut='fadeOut' animationInDuration={1000} isVisible={true}>
					<Row className='row_picture_story_1'>
						<Col className='col_picture_story_3'>
							<div>
								<h1 className='black'>An Untold Story</h1>
								<p>
									Beneath the Dolomite mountains, the hills of Valdobbiadene are alive with the local culture, knowledge and passion for
									making Prosecco. As it's so little known to the world beyond, Della Vite (meaning ‘from the vine’) sets out to tell
									Prosecco’s real story.{' '}
								</p>
							</div>
						</Col>
						<Col className='col_picture_story_4'>
							<Image
								className='col_picture_story_picture_1'
								src='https://www.datocms-assets.com/25196/1598382040-c7a0513.jpeg?q=50&auto=format&dpr=1&w=1920&h=1540&fit=crop'
							/>
						</Col>
					</Row>
				</Animated>
			</Container>
			<Footer />
		</>
	)
}
