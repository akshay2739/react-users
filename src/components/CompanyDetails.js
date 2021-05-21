import classes from './css/CompanyDetails.module.css'

const CompanyDetails = (props) => {
	const user = props.userDetails

	return (
		<div className={classes.companyDetails}>
			<p>Company</p>
			<div className={classes.details}>
				<p className={classes.field}>Name : </p>
				<p className={classes.value}>{user.name}</p>
			</div>
			<div className={classes.details}>
				<p className={classes.field}>Catch Phrase : </p>
				<p className={classes.value}>{user.catchPhrase}</p>
			</div>
			<div className={classes.details}>
				<p className={classes.field}>bs : </p>
				<p className={classes.value}>{user.bs}</p>
			</div>
		</div>
	)
}

export default CompanyDetails
