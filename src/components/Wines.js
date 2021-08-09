import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap'

export default function Wines() {
	return (
		<>
			<Container fluid className='container_home'>
				<Navbar className='navbar' />
				<div id='overlay'></div>
				<Container fluid className='container_wines'>
					<Row className='row_wines_1'>
						<Col className='col_wines_1'>1</Col>
						<Col className='col_wines_2'>2</Col>
					</Row>
					<Row className='row_wines_1'>
						<Col className='col_wines_3'>1</Col>
						<Col className='col_wines_4'>2</Col>
					</Row>
					<Row className='row_wines_1'>
						<Col className='col_wines_1'>1</Col>
						<Col className='col_wines_2'>2</Col>
					</Row>
				</Container>
				<Footer />
			</Container>
		</>
	)
}
