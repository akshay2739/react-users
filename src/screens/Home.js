import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './css/Home.module.css'

const Home = () => {
	const [users, setUsers] = useState()

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const { data } = await axios.get('https://panorbit.in/api/users.json')
				setUsers(data.users)
			} catch (error) {
				console.log(error)
			}
		}

		fetchUsers()
	}, [])

	const userList =
		users &&
		users.map((user) => (
			<NavLink to={`/user/${user.id}`} className={classes.userCard}>
				<img src={user.profilepicture} alt='' />
				<p>{user.name}</p>
			</NavLink>
		))

	return (
		<div className={classes.homeScreenWrapper}>
			<div className={classes.userListWrapper}>
				<p style={{ textAlign: 'center' }}>Select an account</p>
				<div className={classes.userList}>{userList}</div>
			</div>
		</div>
	)
}

export default Home
