import React, { useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap'
import { Animated } from 'react-animated-css'
import { LanguageContext } from '../language/LanguageContext'

export default function Contact(props) {
	const { dictionary, language } = useContext(LanguageContext)

	return (
		<>
			<Container fluid className='container_home'>
				<Navbar className='navbar' handleUpdateLanguage={props.handleUpdateLanguage} language={language} />
				<div id='overlay'></div>
				<Container fluid className='container_contact'>
					<Animated animationIn='fadeIn' animationOut='fadeOut' animationInDuration={1000} isVisible={true}>
						<Container fluid className='container_inner_contact'>
							<Row>
								<Col className='contact_left' xs={12} md={8} lg={8} xl={9}>
									<Row>
										<h1>{dictionary.contact_company_name}</h1>
									</Row>
									<Row>
										<h4>{dictionary.contact_company_description}</h4>
									</Row>
									<Row>
										<p>{dictionary.contact_company_location}</p>
									</Row>
								</Col>
								<Col className='contact_right' xs={12} md={4} lg={4} xl={3}>
									<Row>
										<Col>
											<Row>
												<p className='title_contact'>{dictionary.contact_label_phone}</p>
											</Row>
											<Row>
												<p className='text_contact text_contact_email'>
													{language === 'zh-CN'
														? dictionary.contact_phone_cn
														: dictionary.contact_phone}
												</p>
											</Row>
										</Col>
									</Row>
									<Row>
										<Col>
											<Row>
												<p className='title_contact'>{dictionary.contact_label_email}</p>
											</Row>
											<Row>
												<p className='text_contact text_contact_email'>
													{language === 'zh-CN'
														? dictionary.contact_email_cn
														: dictionary.contact_email}
												</p>
											</Row>
										</Col>
									</Row>
								</Col>
							</Row>
						</Container>
					</Animated>
				</Container>
			</Container>
			<Footer />
		</>
	)
}
