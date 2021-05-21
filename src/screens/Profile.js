import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import AddressDetails from '../components/AddressDetails'
import CompanyDetails from '../components/CompanyDetails'
import ProfileModal from '../components/ProfileModal'
import UserDetails from '../components/UserDetails'
import classes from './css/Profile.module.css'

const Profile = () => {
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

	return user ? (
		<div className={classes.profileWrapper}>
			<header>
				<p>Profile</p>
				<div
					className={classes.profileButton}
					onClick={() => setIsModalOpen((prevState) => !prevState)}
				>
					<img src={user.profilepicture} alt='' />
					<p className={classes.userName}>{user.name}</p>
				</div>
			</header>
			{isModalOpen ? (
				<ProfileModal
					image={user.profilepicture}
					name={user.name}
					email={user.email}
				/>
			) : null}
			<section>
				<div className={classes.userDetails}>
					<UserDetails userDetails={user} />
					<CompanyDetails userDetails={user.company} />
				</div>
				<div className={classes.addressDetails}>
					<AddressDetails userDetails={user.address} />
				</div>
			</section>
		</div>
	) : (
		<p>Loading</p>
	)
}

export default Profile
