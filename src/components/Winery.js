import React, { useEffect, useState, useRef, useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Animated } from 'react-animated-css'
import { LanguageContext } from '../language/LanguageContext'

export default function Winery(props) {
	const home = useRef()
	const wines = useRef()
	const learn_more = useRef()
	const scrolldown = useRef()
	const picture1 = useRef()
	const picture2 = useRef()
	const [visible, setVisible] = useState(true)
	const [visiblePicture1, setVisiblePicture1] = useState(false)
	const [visiblePicture2, setVisiblePicture2] = useState(false)
	const { dictionary, language } = useContext(LanguageContext)

	useEffect(() => {
		let observerHome = new IntersectionObserver(
			(entries) =>
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisible(true)
						observerHome = observerHome.disconnect()
					}
				}),
			{ rootMargin: '0px 0px 0px 0px' }
		)
		observerHome.observe(home.current)

		let observerWine = new IntersectionObserver(
			(entries) =>
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisible(false)
						observerWine = observerWine.disconnect()
					}
				}),
			{ rootMargin: '0px 0px -20px 0px' }
		)
		observerWine.observe(wines.current)

		let observerPicture1 = new IntersectionObserver(
			(entries) =>
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						console.log('appear picture1')
						setVisiblePicture1(true)
						observerPicture1 = observerPicture1.disconnect()
					}
				}),
			{ rootMargin: '0px 0px -100px 0px' }
		)
		observerPicture1.observe(picture1.current)

		let observerPicture2 = new IntersectionObserver(
			(entries) =>
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						console.log('appear picture2')
						setVisiblePicture2(true)
						observerPicture2 = observerPicture2.disconnect()
					}
				}),
			{ rootMargin: '0px 0px -100px 0px' }
		)
		observerPicture2.observe(picture2.current)
	})

	return (
		<>
			<div ref={home}></div>
			<Container fluid className='disable-select container_story'>
				<Navbar className='navbar' handleUpdateLanguage={props.handleUpdateLanguage} language={language} />
				<div id='overlay'></div>
				<Container className='container_home'>
					<Row className='row_title'>
						<Col className='col_title'>
							<h1>{dictionary.winery_title}</h1>
						</Col>
					</Row>
					<Animated animationIn='fadeIn' animationOut='fadeOut' animationInDuration={1000} isVisible={visible}>
						<Row className='row_learn_more'>
							<p ref={learn_more} className={language === 'zh-CN' ? 'text_learn_more cn_learn_more' : 'text_learn_more'}>
								{dictionary.learn_more}
							</p>
							<Col className='col_scrolldown'>
								<div ref={scrolldown} className='scrolldown'></div>
							</Col>
						</Row>
					</Animated>
				</Container>
				<Row ref={wines} className='row_description_story'>
					<Col>
						<h1 className='title_story'>{dictionary.winery_subtitle}</h1>
					</Col>
				</Row>

				<Animated animationIn='fadeIn' animationOut='fadeOut' animationInDuration={1000} isVisible={visiblePicture1}>
					<Row className='row_picture_story_1' ref={picture1}>
						<Col className='col_picture_story_1'>
							<div className='text_story'>
								<h1 className='black'>{dictionary.winery_card_title_1}</h1>
								<p>{dictionary.winery_card_description_1} </p>
							</div>
						</Col>
						<Col className='col_picture_story_2'>
							<Animated animationIn='fadeInUp' animationOut='fadeOut' animationInDuration={2000} isVisible={visiblePicture1}>
								<Image
									className='col_picture_story_picture_1'
									src='https://f6nwnnenqm-flywheel.netdna-ssl.com/wp-content/uploads/2017/12/Sebastiani-2-2400x1400.jpg'
								/>
							</Animated>
						</Col>
					</Row>
				</Animated>

				<Animated animationIn='fadeIn' animationOut='fadeOut' animationInDuration={1000} isVisible={visiblePicture2}>
					<Row className='row_picture_story_1' ref={picture2}>
						<Col className='col_picture_story_3'>
							<div className='text_story'>
								<h1 className='black'>{dictionary.winery_card_title_2}</h1>
								<p>{dictionary.winery_card_description_2} </p>
							</div>
						</Col>
						<Col className='col_picture_story_4'>
							<Animated animationIn='fadeInUp' animationOut='fadeOut' animationInDuration={2000} isVisible={visiblePicture2}>
								<Image
									className='col_picture_story_picture_1'
									src='https://www.foleyfoodandwinesociety.com/assets/client/images/Wineries/Lancaster/LE%202.jpg'
								/>
							</Animated>
						</Col>
					</Row>
				</Animated>
			</Container>
			<Footer />
		</>
	)
}
