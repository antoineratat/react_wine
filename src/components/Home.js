import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap'

export default function Home() {
	return (
		<>
			<Container fluid className='container_home'>
				<div id='overlay'></div>
				<Navbar className='navbar' />
				<Row style={{ backgroundColor: 'yellow', border: '1px solid black' }}>
					<Col style={{ backgroundColor: 'grey', border: '1px solid black' }}>Home</Col>
				</Row>
				<Footer />
			</Container>
		</>
	)
}
