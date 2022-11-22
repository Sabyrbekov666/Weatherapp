import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import DetailedForecast from './components/pages/DetailedForecast'
import Home from './components/pages/Home'
import PrecipitationMap from './components/pages/PrecipitationMap'
import SignUp from './components/pages/SignUp'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/detailedForecast' component={DetailedForecast} />
					<Route path='/precipitationMap' component={PrecipitationMap} />
					<Route path='/sign-up' component={SignUp} />
				</Switch>
			</Router>
		</>
	)
}

export default App
