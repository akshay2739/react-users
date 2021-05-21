import { GoogleApiWrapper, Map } from 'google-maps-react'
import classes from './css/AddressDetails.module.css'

const AddressDetails = (props) => {
	const user = props.userDetails

	return (
		<div className={classes.addressDetails}>
			<p className={classes.field}>Address</p>

			<div className={classes.details}>
				<p className={classes.field}>Street : </p>
				<p className={classes.value}>{user.street}</p>
			</div>
			<div className={classes.details}>
				<p className={classes.field}>Suite : </p>
				<p className={classes.value}>{user.suite}</p>
			</div>
			<div className={classes.details}>
				<p className={classes.field}>City : </p>
				<p className={classes.value}>{user.city}</p>
			</div>
			<div className={classes.details}>
				<p className={classes.field}>Zip Code : </p>
				<p className={classes.value}>{user.zipcode}</p>
			</div>

			<div className={classes.map}>
				<Map
					google={props.google}
					initialCenter={{
						lat: user.geo.lat,
						lng: user.geo.lng,
					}}
					style={{
						position: 'relatiive',
						width: 500,
						height: 300,
						borderRadius: 20,
						marginLeft: 20,
						marginTop: 10,
					}}
				/>
			</div>
		</div>
	)
}

export default GoogleApiWrapper({
	apiKey: '<API_KEY>',
})(AddressDetails)
