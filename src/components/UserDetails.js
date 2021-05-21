import classes from './css/UserDetails.module.css'

const UserDetails = (props) => {
	const user = props.userDetails
	return (
		<div className={classes.userDetails}>
			<img src={user.profilepicture} alt='' />
			<p className={classes.userName}>{user.name}</p>

			<div className={classes.details}>
				<p className={classes.field}>User name : </p>
				<p className={classes.value}>{user.username}</p>
			</div>
			<div className={classes.details}>
				<p className={classes.field}>E-mail : </p>
				<p className={classes.value}>{user.email}</p>
			</div>
			<div className={classes.details}>
				<p className={classes.field}>Phone : </p>
				<p className={classes.value}>{user.phone}</p>
			</div>
			<div className={classes.details}>
				<p className={classes.field}>Website : </p>
				<p className={classes.value}>{user.website}</p>
			</div>
		</div>
	)
}

export default UserDetails
