import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

export default function Appelation(props) {
	const { appelName, appelDesc, img } = props

	return (
		<Row className='row_appel_1'>
			<Col
				className='col_appel_image'
				xs={{ span: 12, order: 2 }}
				lg={{ span: 4, order: 1 }}
				xl={{ span: 3, order: 1 }}>
				<Image className='image_appel_1' src={img} />
			</Col>
			<Col
				className='col_appel_desc'
				xs={{ span: 12, order: 1 }}
				lg={{ span: 8, order: 2 }}
				xl={{ span: 9, order: 2 }}>
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
