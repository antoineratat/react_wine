import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap'

export default function Home() {
	return (
		<>
			<Container fluid>
				<Navbar className='navbar' />
				<div id='overlay'></div>
				<Container className='container_home disable-select'>
					<Row className='row_title'>
						<Col className='col_title'>
							<h1>AN AWARD-WINNING PROSECCO CREATED BY THE DELEVINGNE SISTERS</h1>
						</Col>
					</Row>
					<Row className='row_learn_more'>
						<p className='text_learn_more'>Learn More</p>
					</Row>
				</Container>
			</Container>
			<Footer />
		</>
	)
}
