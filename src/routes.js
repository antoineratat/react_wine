import Home from './components/Home'
import Story from './components/Story'
import Wines from './components/Wines'
import Winery from './components/Winery'
import Contact from './components/Contact'

export const routes = [
	{
		path: '/home',
		name: 'home',
		component: Home,
	},
	{
		path: '/story',
		name: 'story',
		component: Story,
	},
	{
		path: '/wines',
		name: 'wines',
		component: Wines,
	},
	{
		path: '/winery',
		name: 'winery',
		component: Winery,
	},
	{
		path: '/contact',
		name: 'contact',
		component: Contact,
	},
]
