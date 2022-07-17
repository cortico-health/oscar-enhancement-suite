import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './organisms/header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import PUi from '../routes/p-ui';

const App = () => (
	<div id="app" className='mt-2.5'>
		<Header />
		<Router>
			<Home path="/" />
			<Profile path="/profile/" user="me" />
			<Profile path="/profile/:user" />
			<PUi path="/ui" />
		</Router>
	</div>
)

export default App;
