import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../../routes/routes'
import { useAuthState } from 'react-firebase-hooks/auth'
import Loader from '../../UI/Loader/Loader'


const AppRouter = ({auth}) => {
		const [user, loading] = useAuthState(auth);

	if (loading) return <Loader />
	return (

		<Routes  >
			{(user) ?
				PrivateRoutes.map(({ path, element }) => <Route    key={path} path={path} element={element} />) :


				PublicRoutes.map(({ path, element }) => <Route  key={path} path={path} element={element} />)

			}
		</Routes>
	)
}

export default AppRouter