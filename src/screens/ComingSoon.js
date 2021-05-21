import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import classes from './css/Profile.module.css'
import ProfileModal from '../components/ProfileModal'
const ComingSoon = (props) => {
	let { id } = useParams()
	id -= 1

	const [user, setUser] = useState()
	const [isModalOpen, setIsModalOpen] = useState(false)
	useEffect(() => {
		const fet = async () => {
			const { data } = await axios.get('https://panorbit.in/api/users.json')
			setUser(data.users[id])
		}

		fet()
	}, [])

	const { pageName } = useParams()

	return (
		<div className={classes.profileWrapper}>
			<header>
				<p>{pageName}</p>
				{user ? (
					<div
						className={classes.profileButton}
						onClick={() => setIsModalOpen((prevState) => !prevState)}
					>
						<img src={user.profilepicture} alt='' />
						<p className={classes.userName}>{user.name}</p>
					</div>
				) : null}
			</header>
			{isModalOpen ? (
				<ProfileModal
					image={user.profilepicture}
					name={user.name}
					email={user.email}
				/>
			) : null}
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontWeight: 700,
					fontSize: 20,
				}}
			>
				<p>Coming Soon!</p>
			</div>
		</div>
	)
}

export default ComingSoon
