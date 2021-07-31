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
				<video
					id='background_big'
					src='https://res.cloudinary.com/della-vite/video/upload/f_auto,q_auto,ac_none,f_auto,w_1400/dato/1598299900-dvwebsitehomepagegeneral16x9.mp4'
					loop='loop'
					muted='muted'
					autoPlay='autoplay'
					playsInline=''
					className='backgroundMedia'
					data-video='0'></video>

				<video
					id='background_small'
					src='https://res.cloudinary.com/della-vite/video/upload/f_auto,q_auto,ac_none,f_auto,w_900/dato/1598299917-dvwebsitehomepagegeneral9x16.mp4'
					loop='loop'
					muted='muted'
					autoPlay='autoplay'
					playsInline=''
					className='backgroundMedia'
					data-video='0'></video>
				<Row style={{ backgroundColor: 'yellow', border: '1px solid black' }}>
					<Col style={{ backgroundColor: 'grey', border: '1px solid black' }}>Wines</Col>
				</Row>
				<Footer />
			</Container>
		</>
	)
}
