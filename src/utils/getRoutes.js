import { Route } from 'react-router-dom'

export default function getRoutes(routes) {
	return routes.map((prop, key) => {
		return <Route path={prop.path} exact component={prop.component} key={key} />
	})
}
