import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './screens/Home'
import ProfileScreen from './screens/ProfileScreen'

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/user/:id' component={ProfileScreen} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
