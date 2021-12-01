import React, { useState, useEffect, useRef } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { Animated } from 'react-animated-css'

export default function Wine(props) {
	const { isLeft, language, wineTitle, wineDescription, wineImage } = props
	const row_wines = useRef()
	const [visibleRow, setVisibleRow] = useState(false)

	useEffect(() => {
		let observerRow = new IntersectionObserver(
			(entries) =>
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisibleRow(true)
						observerRow = observerRow.disconnect()
					}
				}),
			{ rootMargin: '0px 0px -400px 0px' }
		)
		observerRow.observe(row_wines.current)
	})

	return (
		<Row ref={row_wines} className='row_wines'>
			<Col
				xs={isLeft ? { order: 1, span: 12 } : { order: 1, span: 12 }}
				md={isLeft ? { order: 1, span: 4 } : { order: 2, span: 4 }}
				lg={isLeft ? { order: 1, span: 3 } : { order: 2, span: 3 }}
				xl={isLeft ? { order: 1, span: 3 } : { order: 2, span: 3 }}>
				<Animated
					className='animated_wines'
					animationIn='fadeInUp'
					animationOut='fadeOut'
					animationInDuration={2000}
					animationOutDuration={0}
					isVisible={visibleRow}>
					<Image className='image_wines_1' src={wineImage} />
				</Animated>
			</Col>
			<Col
				xs={isLeft ? { order: 2, span: 12 } : { order: 2, span: 12 }}
				md={isLeft ? { order: 2, span: 8 } : { order: 1, span: 8 }}
				lg={isLeft ? { order: 2, span: 9 } : { order: 1, span: 9 }}
				xl={isLeft ? { order: 2, span: 9 } : { order: 1, span: 9 }}>
				<Animated
					className='animated_wines'
					animationIn='fadeIn'
					animationOut='fadeOut'
					animationInDuration={2000}
					animationOutDuration={0}
					isVisible={visibleRow}>
					<Row className='wine_description'>
						<Col className='wine_description_left'>
							<h1 style={language === 'zh-CN' ? { fontFamily: 'hanzhen' } : {}}>{wineTitle}</h1>
							<h4>{wineDescription}</h4>
						</Col>
					</Row>
				</Animated>
			</Col>
		</Row>
	)
}