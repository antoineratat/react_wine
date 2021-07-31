import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap'

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
						<NavLink exact className='navbar_wines' activeClassName='current' to='/wines'>
							Wines
						</NavLink>
						<NavLink exact className='navbar_story' activeClassName='current' to='/story'>
							Story
						</NavLink>
						<NavLink exact className='navbar_winery' activeClassName='current' to='/winery'>
							Winery
						</NavLink>
						<NavLink exact className='navbar_contact' activeClassName='current' to='/contact'>
							Contact
						</NavLink>
					</Nav>
				</BootstrapNavbar.Collapse>
			</BootstrapNavbar>
		</>
	)
}
