import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar as BootstrapNavbar, Nav, Button, Col } from 'react-bootstrap'
import Flags from 'country-flag-icons/react/3x2'
import { LanguageContext } from '../language/LanguageContext'

export default function Navbar(props) {
	const { handleUpdateLanguage, language } = props
	const { dictionary } = useContext(LanguageContext)

	function onMouseEnter(e) {
		let navbar_nav = document.getElementsByClassName('navbar-nav')[0]
		let navbar_child = navbar_nav.children
		for (var i = 0; i < navbar_child.length; i++) {
			let navbar_link = navbar_child[i]
			if (navbar_link.id !== e.target.getAttribute('id')) {
				navbar_link.style.color = '#ffffff47'
			}
		}
	}

	function onMouseExit(e) {
		let navbar_nav = document.getElementsByClassName('navbar-nav')[0]
		let navbar_child = navbar_nav.children
		for (var i = 0; i < navbar_child.length; i++) {
			let navbar_link = navbar_child[i]
			navbar_link.style.color = 'white'
		}
	}

	return (
		<>
			<BootstrapNavbar className='navbar navbar-dark disable-select' expand='md'>
				<Link to='/' className='navbar_brand'>
					<BootstrapNavbar.Brand>{dictionary.navbar_brand}</BootstrapNavbar.Brand>
				</Link>
				<BootstrapNavbar.Toggle aria-controls='basic-navbar-nav' />
				<BootstrapNavbar.Collapse id='basic-navbar-nav' className={language === 'zh-CN' ? 'navbar_nav cn_a' : 'navbar_nav'}>
					<Nav className='mr-auto'>
						<NavLink
							exact
							id='navbar_wines'
							className='navbar_wines'
							activeClassName='current'
							to='/wines'
							onMouseEnter={(e) => onMouseEnter(e)}
							onMouseLeave={(e) => onMouseExit(e)}>
							{dictionary.navbar_wines}
						</NavLink>
						<NavLink
							exact
							id='navbar_story'
							className='navbar_story'
							activeClassName='current'
							to='/story'
							onMouseEnter={(e) => onMouseEnter(e)}
							onMouseLeave={(e) => onMouseExit(e)}>
							{dictionary.navbar_story}
						</NavLink>
						<NavLink
							exact
							id='navbar_winery'
							className='navbar_winery'
							activeClassName='current'
							to='/winery'
							onMouseEnter={(e) => onMouseEnter(e)}
							onMouseLeave={(e) => onMouseExit(e)}>
							{dictionary.navbar_winery}
						</NavLink>
						<NavLink
							exact
							id='navbar_contact'
							className='navbar_contact'
							activeClassName='current'
							to='/contact'
							onMouseEnter={(e) => onMouseEnter(e)}
							onMouseLeave={(e) => onMouseExit(e)}>
							{dictionary.navbar_contact}
						</NavLink>
						<Col className='col_language_phone mt-4'>
							<Button
								onClick={() => handleUpdateLanguage('zh-CN')}
								variant='dark'
								className={language === 'zh-CN' ? 'button_language_CN button_language_hover' : 'button_language_CN'}>
								中文
								<Flags.CN title='China' className='flag_cn' />
							</Button>
							<Button
								onClick={() => handleUpdateLanguage('fr-FR')}
								variant='dark'
								className={language === 'fr-FR' ? 'button_language_FR button_language_hover' : 'button_language_FR'}>
								FR
								<Flags.FR title='France' className='flag_fr' />
							</Button>
							<Button
								onClick={() => handleUpdateLanguage('en-US')}
								variant='dark'
								className={language === 'en-US' ? 'button_language_EN button_language_hover' : 'button_language_EN'}>
								EN
								<Flags.US title='United States' className='flag_us' />
							</Button>
						</Col>
					</Nav>
				</BootstrapNavbar.Collapse>
				<Col className='col_language'>
					<Button
						onClick={() => handleUpdateLanguage('zh-CN')}
						variant='dark'
						className={language === 'zh-CN' ? 'button_language_CN button_language_hover' : 'button_language_CN'}>
						中文
						<Flags.CN title='China' className='flag_cn' />
					</Button>
					<Button
						onClick={() => handleUpdateLanguage('fr-FR')}
						variant='dark'
						className={language === 'fr-FR' ? 'button_language_FR button_language_hover' : 'button_language_FR'}>
						FR
						<Flags.FR title='France' className='flag_fr' />
					</Button>
					<Button
						onClick={() => handleUpdateLanguage('en-US')}
						variant='dark'
						className={language === 'en-US' ? 'button_language_EN button_language_hover' : 'button_language_EN'}>
						EN
						<Flags.US title='United States' className='flag_us' />
					</Button>
				</Col>
			</BootstrapNavbar>
		</>
	)
}
