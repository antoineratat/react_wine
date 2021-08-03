import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap'
import { Animated } from 'react-animated-css'

export default function Contact() {
	return (
		<>
			<Container fluid className='container_home'>
				<Navbar className='navbar' />
				<div id='overlay'></div>
				<Container fluid className='container_contact'>
					<Animated animationIn='fadeIn' animationOut='fadeOut' animationInDuration={1000} isVisible={true}>
						<Container fluid className='container_inner_contact'>
							<Row>
								<Col className='contact_left'>
									<Row>
										<h1>Company Name</h1>
									</Row>
									<Row>
										<h4>
											Rich and extra-dry with a highly mineral palate that lingers, our Prosecco Superiore DOCG is characterised by hints
											of crostini and chamomile.
										</h4>
									</Row>
									<Row>
										<p>45.9013° N, 11.9959° E, NORTHERN ITALY</p>
									</Row>
								</Col>
							</Row>
							<Row>
								<Col className='contact_right'></Col>
							</Row>
						</Container>
					</Animated>
				</Container>
			</Container>
			<Footer />
		</>
	)
}
