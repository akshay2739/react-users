import {
	NavLink,
	Route,
	Switch,
	useParams,
	useRouteMatch,
} from 'react-router-dom'
import Chat from '../components/Chat'
import ComingSoon from './ComingSoon'
import classes from './css/ProfileScreen.module.css'
import Profile from './Profile'

const ProfileScreen = () => {
	const param = useParams()
	let { path, url } = useRouteMatch()
	console.log(path)
	console.log(url)

	return (
		<div className={classes.pageWrapper}>
			<div className={classes.container}>
				<div className={classes.sideNav}>
					<div className={classes.links}>
						<NavLink className={classes.link} to={`${url}`}>
							Profile
						</NavLink>
						<NavLink className={classes.link} to={`${url}/posts/Posts`}>
							Posts
						</NavLink>
						<NavLink className={classes.link} to={`${url}/gallary/Gallary`}>
							Gallary
						</NavLink>
						<NavLink className={classes.link} to={`${url}/todo/ToDo`}>
							ToDo
						</NavLink>
					</div>
				</div>
				<div className={classes.main}>
					<Switch>
						<Route exact path={path} component={Profile} />
						<Route path={`${path}/posts/:pageName`} component={ComingSoon} />
						<Route path={`${path}/gallary/:pageName`} component={ComingSoon} />
						<Route path={`${path}/todo/:pageName`} component={ComingSoon} />
					</Switch>
					{/* <Profile /> */}
				</div>
			</div>
			<Chat />
		</div>
	)
}

export default ProfileScreen
