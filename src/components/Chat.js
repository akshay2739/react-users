import axios from 'axios'
import { useEffect, useState } from 'react'
import classes from './css/Chat.module.css'

const Chat = () => {
	const [users, setUsers] = useState()
	const [isChatOpen, setIsChatOpen] = useState(false)
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get('https://panorbit.in/api/users.json')
			setUsers(data.users)
		}

		fetchData()
	}, [])

	const openChat = () => {
		setIsChatOpen(!isChatOpen)
	}

	return (
		<div className={classes.chatContainer}>
			<header onClick={openChat}>Chat</header>
			{isChatOpen ? (
				<div className={classes.userList} id='userList'>
					{users &&
						users.map((user) => (
							<div className={classes.user}>
								<img src={user.profilepicture} alt='' />
								<p>{user.name}</p>
								<p
									style={{
										color: user.name.startsWith('C') ? 'green' : '#ccc',
									}}
								>
									&#x25cf;
								</p>
							</div>
						))}
				</div>
			) : null}
		</div>
	)
}

export default Chat
