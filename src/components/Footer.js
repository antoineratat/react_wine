import React from 'react'
import { Row } from 'react-bootstrap'

export default function Footer() {
	return (
		<Row className='footer'>
			<div className='navigation-footer'>
				<p>Wines</p>
				<p>Story</p>
				<p>Winery</p>
				<p>Contact</p>
			</div>
			<div className='signature-footer'>
				<p className='footer_year'>2021 © Wine</p>
				<p className='footer_signature'>Website by Antoine Ratat.</p>
			</div>
		</Row>
	)
}
