import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap'

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

export default function Navbar() {
	return (
		<>
			<BootstrapNavbar className='navbar' expand='lg'>
				<Link to='/' className='navbar_brand'>
					<BootstrapNavbar.Brand>React Wine</BootstrapNavbar.Brand>
				</Link>
				<BootstrapNavbar.Toggle aria-controls='basic-navbar-nav' />
				<BootstrapNavbar.Collapse id='basic-navbar-nav' className='navbar_nav'>
					<Nav className='mr-auto'>
						<NavLink
							exact
							id='navbar_wines'
							className='navbar_wines'
							activeClassName='current'
							to='/wines'
							onMouseEnter={(e) => onMouseEnter(e)}
							onMouseLeave={(e) => onMouseExit(e)}>
							Wines
						</NavLink>
						<NavLink
							exact
							id='navbar_story'
							className='navbar_story'
							activeClassName='current'
							to='/story'
							onMouseEnter={(e) => onMouseEnter(e)}
							onMouseLeave={(e) => onMouseExit(e)}>
							Story
						</NavLink>
						<NavLink
							exact
							id='navbar_winery'
							className='navbar_winery'
							activeClassName='current'
							to='/winery'
							onMouseEnter={(e) => onMouseEnter(e)}
							onMouseLeave={(e) => onMouseExit(e)}>
							Winery
						</NavLink>
						<NavLink
							exact
							id='navbar_contact'
							className='navbar_contact'
							activeClassName='current'
							to='/contact'
							onMouseEnter={(e) => onMouseEnter(e)}
							onMouseLeave={(e) => onMouseExit(e)}>
							Contact
						</NavLink>
					</Nav>
				</BootstrapNavbar.Collapse>
			</BootstrapNavbar>
		</>
	)
}
