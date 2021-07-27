import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap'

export default function Navbar() {
	return (
		<>
			<BootstrapNavbar className='admin_navbar ml-sm-2' bg='light' variant='light' expand='lg'>
				<Link to='/'>
					<BootstrapNavbar.Brand className='logo_font'>React Wine</BootstrapNavbar.Brand>
				</Link>
				<BootstrapNavbar.Toggle aria-controls='basic-navbar-nav' />
				<BootstrapNavbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<NavLink to='/home'>Home</NavLink>
						<NavLink to='/story'>Story</NavLink>
						<NavLink to='/wines'>Wines</NavLink>
						<NavLink to='/winery'>Winery</NavLink>
						<NavLink to='/contact'>Contact</NavLink>
					</Nav>
				</BootstrapNavbar.Collapse>
			</BootstrapNavbar>
		</>
	)
}
