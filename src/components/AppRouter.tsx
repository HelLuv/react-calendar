import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { privateRoutes } from '../routes';
import { publicRoutes } from './../routes/index';
import { RouteNames } from '../routes/index';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const AppRouter = () => {
	const { isAuth } = useTypedSelector(state => state.auth);
	return (
		isAuth
			?
			<Switch>
				{privateRoutes.map(route =>
					<Route
						path={route.path}
						exact={route.exact}
						component={route.component}
						key={route.path}
					/>
				)}
				<Redirect to={RouteNames.EVENT} />
			</Switch>
			:
			<Switch>
				{publicRoutes.map(route =>
					<Route
						path={route.path}
						exact={route.exact}
						component={route.component}
						key={route.path}
					/>
				)}
				<Redirect to={RouteNames.LOGIN} />
			</Switch>
	)
}
