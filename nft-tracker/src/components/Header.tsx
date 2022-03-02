
import React from 'react';

const Header = () => (
	<div className="w-full z-10 ">
		<div className="w-full flex justify-around pt-10 text-white items-center">
			{/** Added the Logo */}
			<div className="cursor-pointer z-50">
				<img src="/images/main_star.png" />
			</div>
			{/** Made NavBar */}
			<div className="flex space-x-20 font-Titillium z-50 ">
				<div className="cursor-pointer">
					Explore
				</div>
				<div className="cursor-pointer">
					Activity
				</div>
				<div className="cursor-pointer">
					How it works
				</div>
			</div>
			{/** Add a button */}
			<div className="z-50 ">	
				<img src="/images/button1.svg" />
			</div>
		</div>
	</div>
)

export default Header