import React from 'react';
import Header from './Header'
import Explore from '../components/Explore'
import ExploreBackground from './ExploreBackground'

const ExploreRoute = () => (
	<div className="w-full z-10 ">
		<ExploreBackground />
		<Header />
		<Explore />
	</div>
)

export default ExploreRoute