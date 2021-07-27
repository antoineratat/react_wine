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
						<NavLink exact activeClassName='current' to='/wines'>
							Wines
						</NavLink>
						<NavLink exact activeClassName='current' to='/story'>
							Story
						</NavLink>
						<NavLink exact activeClassName='current' to='/winery'>
							Winery
						</NavLink>
						<NavLink exact activeClassName='current' to='/contact'>
							Contact
						</NavLink>
					</Nav>
				</BootstrapNavbar.Collapse>
			</BootstrapNavbar>
		</>
	)
}
