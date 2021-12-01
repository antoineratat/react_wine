import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function Ratings() {
	return (
		<Row className='ratings'>
			<Col>
				<div>Ratings: Vivino (Link) / Robert Parker (Link)</div>
			</Col>
			<Col>
				<input
					class='rating'
					max='5'
					readonly
					step='0.01'
					style={{ '--value': '4.3' }}
					type='range'
					value='4.3'
				/>
			</Col>
		</Row>
	)
}
