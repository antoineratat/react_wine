import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { Animated } from 'react-animated-css'

export default function Appelation(props) {
	const { appelName, appelDesc, img } = props

	return (
		<Row className='row_appel_1'>
			<Col className='col_appel_image' xs={12} sm={12} md={4} lg={4} xl={3}>
				<Image className='image_appel_1' src={img} />
			</Col>
			<Col className='col_appel_desc' xs={12} md={12} lg={8} xl={9}>
				<Row>
					<Col className='appel_right'>
						<Row>
							<h1>{appelName}</h1>
						</Row>
						<Row>
							<h4>{appelDesc}</h4>
						</Row>
					</Col>
				</Row>
			</Col>
		</Row>
	)
}
