import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './css/ProfileModal.module.css'

const ProfileModal = (props) => {
	const [users, setUsers] = useState()
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get('https://panorbit.in/api/users.json')
			let users = []
			users.push(data.users[0])
			users.push(data.users[1])
			setUsers(users)
		}

		fetchData()
	}, [])

	return (
		<div className={classes.profileModal}>
			<img src={props.image} alt='' />
			<p>{props.name}</p>
			<h2>{props.email}</h2>
			{users && (
				<div>
					<div className={classes.userList}>
						<div className={classes.imageContainer}>
							<img src={users[0].profilepicture} alt='' />
						</div>
						<h3>{users[0].name}</h3>
					</div>
					<div className={classes.userList}>
						<div className={classes.imageContainer}>
							<img src={users[1].profilepicture} alt='' />
						</div>
						<h3>{users[1].name}</h3>
					</div>
				</div>
			)}
			<NavLink className={classes.button} to='/'>
				Sign out
			</NavLink>
		</div>
	)
}

export default ProfileModal
