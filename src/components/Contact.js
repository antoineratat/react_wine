import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap'

export default function Contact() {
	return (
		<>
			<Container fluid className='container_home'>
				<Navbar className='navbar' />
				<div id='overlay'></div>
				<Row style={{ backgroundColor: 'yellow', border: '1px solid black' }}>
					<Col style={{ backgroundColor: 'grey', border: '1px solid black' }}>Contact</Col>
				</Row>
				<Footer />
			</Container>
		</>
	)
}
